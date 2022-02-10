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
      return {error: "This album does not contain enough valid photos for this request."};
    }

    const responseBody = {
        photos: photos
      };
    return responseBody;

  } catch (e) {
    throw Error(e);
  }
}