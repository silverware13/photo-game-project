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