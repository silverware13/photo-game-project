/*
Author:      Zachary Thomas
Created:     2/10/2022
Modified:    2/10/2022
-----------------------------------------------------------------
*/

import { pool } from "../utilities/database/mysqlPool.js";

// Get all albums.
export async function getAlbums() {
  try {
    const sql = "SELECT album_id AS albumId, name FROM album;";
    const result = await pool.query(sql, []);
    const responseBody = {
        albums: result[0]
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
    + " AND value > ?;"
    let result = await pool.query(sql, [userId, albumId, score]);

    if (result[0].length > 0) {
      return { message: "The current user already has a higher score for this album." }
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