/*
Author:      Zachary Thomas
Created:     2/6/2022
Modified:    2/6/2022
-----------------------------------------------------------------
*/

import express from "express";
import cors from "cors";
import logger from "morgan";
import cookieParser from "cookie-parser";
import user from "./user.js"
const app = express();

// Check that JSON body is valid.
app.use((req, res, next) => {
  express.json()(req, res, err => {
    if (e) {
      console.error("400: Invalid JSON request body");
      res.status(400).send({error: "400: Invalid JSON request body"});
    } else {
      next();
    }
  });
});

// General middleware.
app.use(logger("dev"));
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(`${process.cwd()}/public`));
app.use(cors({origin: true, credentials: true}));
app.use(express.json());

// Handle api requests.
app.use("/api/user", user);

// Unhandled API requests get a 404 error.
app.all("/api/*", (req, res) => {
  console.error("404: Endpoint not found\n");
  res.status(404).send({error: "Not Found"});
});

export default app;