/*
Author:      Zachary Thomas
Created:     2/10/2022
Modified:    2/10/2022
-----------------------------------------------------------------
*/

import express from "express";
import { getAlbums } from "../models/album.js";
const app = express();

// Get all albums.
app.get("/", async (req, res) => {
  try {
    const result = await getAlbums();
    res.status(200).send(result);

  } catch (e) {
    console.error(e);
    res.status(500).send({error: "An internal server error occurred. Please try again later."});
  }
});

export default app;
