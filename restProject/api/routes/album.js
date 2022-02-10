/*
Author:      Zachary Thomas
Created:     2/10/2022
Modified:    2/10/2022
-----------------------------------------------------------------
*/

import express from "express";
import { validationResult } from "express-validator";
import { getQuestionVal } from "../utilities/validation/requestValidation.js";
import { getAlbums, getQuestion } from "../models/album.js";
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

// // Get four random photos from an album.
app.get("/:albumId/question", getQuestionVal.validation, async (req, res) => {
  try {
    if (!validationResult(req).isEmpty()) {
      res.status(400).json({error: "Invalid request body / parameters", details: validationResult(req).errors});
      return;
    }

    const result = await getQuestion(req.params.albumId);
    res.status(200).send(result);

  } catch (e) {
    console.error(e);
    res.status(500).send({error: "An internal server error occurred. Please try again later."});
  }
});

export default app;
