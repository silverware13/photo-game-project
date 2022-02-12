/*
Author:      Zachary Thomas
Created:     2/10/2022
Modified:    2/10/2022
-----------------------------------------------------------------
*/

import { pool } from "../utilities/database/mysqlPool.js";

// Get all albums.
export async function getAlbums(userId) {
  try {
    // Get all albums.
    let sql = "SELECT album_id AS albumId, name FROM album;";
    let result = await pool.query(sql, []);
    const albums = result[0];

    // Get the overall high score for each album.
    sql = "SELECT a.album_id AS albumId, s.value AS value, u.name AS username"
    + " FROM album a"
    + " JOIN score s ON(s.album_id = a.album_id)"
    + " JOIN user u ON(u.user_id = s.user_id)"
    + " INNER JOIN ("
    + "   SELECT album.album_id AS albumId, MAX(score.value) AS value, user.name AS username"
    + "   FROM album"
    + "   JOIN score ON(score.album_id = album.album_id)"
    + "   JOIN user ON(user.user_id = score.user_id)"
    + "   GROUP BY album.album_id"
    + " ) AS a2"
    + " ON a.album_id = a2.albumId AND s.value = a2.value;";
    result = await pool.query(sql, []);
    const globalHighScores = result[0];

    // Get the personal high score for each album.
    sql = "SELECT a.album_id AS albumId, MAX(s.value) AS value"
    + " FROM album a"
    + " JOIN score s ON(s.album_id = a.album_id)"
    + " WHERE s.user_id = ?"
    + " GROUP BY a.album_id;";
    result = await pool.query(sql, [userId]);
    const personalHighScores = result[0];

    // Assign the high score details to each album.
    albums.forEach(album => {
      const globalHighScore = globalHighScores.find(highScore =>
        highScore.albumId === album.albumId
      );

      if (globalHighScore === undefined) {
        album.globalHighScore = 0;
        album.globalUser = null
      } else {
        album.globalHighScore = globalHighScore.value;
        album.globalUser = globalHighScore.username
      }

      const personalHighScore = personalHighScores.find(highScore =>
        highScore.albumId === album.albumId
      );

      if (personalHighScore === undefined) {
        album.personalHighScore = 0;
      } else {
        album.personalHighScore = personalHighScore.value;
      }
    });

    const responseBody = {
        albums: albums
      };
    return responseBody;

  } catch (e) {
    throw Error(e);
  }
}

// Get four random photos from an album.
export async function getQuestion(albumId) {
  try {
    const sql = "SELECT photo_id AS photoId, answer, image_url AS imageUrl"
    + " FROM photo"
    + " WHERE album_id = ?;";
    const result = await pool.query(sql, [albumId]);

    // Shuffle photos.
    let shuffledPhotos = result[0];
    let currentIndex = shuffledPhotos.length, randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [shuffledPhotos[currentIndex], shuffledPhotos[randomIndex]] = [shuffledPhotos[randomIndex], shuffledPhotos[currentIndex]];
    }

    // Remove photos with duplicate answers.
    let filteredPhotos = shuffledPhotos.filter((photo, index) =>
      shuffledPhotos.indexOf(photo) === index
    );

    // Select four photos.
    let photos;
    if (filteredPhotos.length >= 4) {
      photos = filteredPhotos.slice(-4)
    } else {
      return { error: "This album does not contain enough valid photos for this request.", status: 500 };
    }

    const responseBody = {
        photos: photos
      };
    return responseBody;

  } catch (e) {
    throw Error(e);
  }
}

// Submit a new score for an album if it is higher than the current top score.
export async function putScore(albumId, score, userId) {
  try {
    // Check if a higher score already exists for the current album and user.
    let sql = "SELECT *"
    + " FROM score"
    + " WHERE user_id = ?"
    + " AND album_id = ?"
    + " AND value >= ?;"
    let result = await pool.query(sql, [userId, albumId, score]);

    if (result[0].length > 0) {
      const responseBody = {
        message: "The current user already has a higher score for this album."
      }
      return responseBody;
    }

    // Submit the new high score.
    sql = "INSERT INTO score (user_id, album_id, value, created_utc, modified_utc)"
    + " VALUES (?, ?, ?, UTC_TIMESTAMP(), UTC_TIMESTAMP())"
    + " ON DUPLICATE KEY UPDATE value = ?, modified_utc = UTC_TIMESTAMP();";
    result = await pool.query(sql, [userId, albumId, score, score]);

    const responseBody = {
        message: "New high score submitted successfully."
      };
    return responseBody;

  } catch (e) {
    throw Error(e);
  }
}