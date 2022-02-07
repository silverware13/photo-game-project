/*
Author:      Zachary Thomas
Created:     2/6/2022
Modified:    2/6/2022
-----------------------------------------------------------------
*/

import express from "express";
import { validationResult } from "express-validator";
import { setAuthCookie, generateAuthToken } from "../utilities/authentication/cookieAuth.js";
import { loginUserVal, createUserVal } from "../utilities/validation/requestValidation.js";
import { loginUser, createUser } from "../models/user.js";
const app = express();

// Login a user.
app.post("/login", loginUserVal.validation, async (req, res) => {
  try {
    if (!validationResult(req).isEmpty()) {
      res.status(400).json({error: "Invalid request body / parameters", details: validationResult(req).errors});
      return;
    }

    const result = await loginUser(req.body.email, req.body.password);

    if (result.userId > 0) {
      const token = generateAuthToken(result.userId);
      setAuthCookie(res, token, result.userId, result.email, result.admin);
      res.status(200).send(result);

    } else {
      if (result.error) {
        res.status(400).send({error: result.error});
      } else {
        res.status(500).send({error: "An internal server error occurred. Please try again later."});
      }
    }
  } catch (e) {
    console.error(e);
    res.status(500).send({error: "An internal server error occurred. Please try again later."});
  }
});

// Create a new user.
app.post("/", createUserVal.validation, async (req, res) => {
  try {
    if (!validationResult(req).isEmpty()) {
      res.status(400).json({error: "Invalid request body / parameters", details: validationResult(req).errors});
      return;
    }

    const result = await createUser(req.body.email.trim(), req.body.password.trim());

    if (result.userId) {
      const token = generateAuthToken(result.userId);
      setAuthCookie(res, token, result.userId, req.body.email.trim(), 0);
      res.status(201).send(result);

    } else {
      if (result.error) {
        res.status(400).send({error: result.error});
      } else {
        res.status(500).send({error: "An internal server error occurred. Please try again later."});
      }
    }
  } catch (e) {
    console.error(e);
    res.status(500).send({error: "An internal server error occurred. Please try again later."});
  }
});

export default app;
