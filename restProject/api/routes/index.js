/*
Author:      Zachary Thomas
Created:     2/6/2022
Modified:    2/6/2022
-----------------------------------------------------------------
*/

import { join } from "path";
import { json } from "body-parser";
import express, { urlencoded, static, json as _json } from "express";
import cors from "cors";
import logger from "morgan";
import cookieParser from "cookie-parser";
const app = express();

// Check that JSON body is valid.
app.use((req, res, next) => {
  json()(req, res, err => {
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
app.use(urlencoded({extended: false}));
app.use(cookieParser());
app.use(static(join(__dirname, "public")));
app.use(cors({
  origin: true,
  credentials: true
}));
app.use(_json());

// Handle api requests.
app.use("/api/user", require("./user"));

// Unhandled API requests get a 404 error.
app.all("/api/*", (req, res) => {
  console.error("404: Endpoint not found\n");
  res.status(404).send({error: "Not Found"});
});

export default app;