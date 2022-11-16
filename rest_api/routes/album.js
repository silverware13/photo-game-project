/*
Author:      Zachary Thomas
Created:     2/10/2022
Modified:    2/11/2022
-----------------------------------------------------------------
*/

import express from "express";
import { requireAuth } from "../utilities/authentication/cookieAuth.js";
import { validationResult } from "express-validator";
import { getPhotosVal, getQuestionVal, putScoreVal } from "../utilities/validation/requestValidation.js";
import { getPhotos, getAlbums, getQuestion, putScore } from "../models/album.js";
const app = express();

// Get all albums.
app.get("/", requireAuth, async (req, res) => {
  try {
    const result = await getAlbums(req.auth.userId);
    res.status(200).send(result);

  } catch (e) {
    console.error(e);
    res.status(500).send({ error: "An internal server error occurred. Please try again later." });
  }
});

// Get all photos in an album.
app.get("/:albumId", requireAuth, getPhotosVal.validation, async (req, res) => {
  try {
    if (!validationResult(req).isEmpty()) {
      res.status(400).json({ error: "Invalid request body / parameters", details: validationResult(req).errors });
      return;
    }

    const result = await getPhotos(req.params.albumId);
    res.status(200).send(result);

  } catch (e) {
    console.error(e);
    res.status(500).send({ error: "An internal server error occurred. Please try again later." });
  }
});

// Get four random photos from an album.
app.get("/:albumId/question", requireAuth, getQuestionVal.validation, async (req, res) => {
  try {
    if (!validationResult(req).isEmpty()) {
      res.status(400).json({ error: "Invalid request body / parameters", details: validationResult(req).errors });
      return;
    }

    const result = await getQuestion(req.params.albumId);
    if (result.photos) {
      res.status(200).send(result);
  
    } else {
      if (result.error) {
        res.status(result.status).send({ error: result.error });
      } else {
        res.status(500).send({ error: "An internal server error occurred. Please try again later." });
      }
    }

  } catch (e) {
    console.error(e);
    res.status(500).send({ error: "An internal server error occurred. Please try again later." });
  }
});

// Submit a new score for an album.
app.put("/:albumId/score", requireAuth, putScoreVal.validation, async (req, res) => {
  try {
    if (!validationResult(req).isEmpty()) {
      res.status(400).json({ error: "Invalid request body / parameters", details: validationResult(req).errors });
      return;
    }

    const result = await putScore(req.params.albumId, req.body.score, req.auth.userId);
    if (result.message) {
      res.status(200).send(result);

    } else {
      if (result.error) {
        res.status(result.status).send({ error: result.error });
      } else {
        res.status(500).send({ error: "An internal server error occurred. Please try again later." });
      }
    }

  } catch (e) {
    console.error(e);
    res.status(500).send({ error: "An internal server error occurred. Please try again later." });
  }
});

export default app;
