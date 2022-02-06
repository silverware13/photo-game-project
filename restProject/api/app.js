/*
Author:      Zachary Thomas
Created:     2/2/2022
Modified:    2/2/2022
-----------------------------------------------------------------
*/

// Setup database connection and routing.
require("dotenv").config({silent: process.env.NODE_ENV === "production"});

import express, { static } from "express";
import { join } from "path";
import { pool } from "./services/database/mysqlPool";
import app from "./routes/index";
import { createServer } from "http";
import { MAX_CONNECTION_ATTEMPTS } from "./utilities/constants";
const fileApp = express();

console.log("REST API start");
console.log(`Running in ${process.env.NODE_ENV} mode`);

const apiPort = process.env.API_PORT || 1111;
const filePort = process.env.FILE_PORT || 2222;

// Confirm that a connection was made to the database.
async function testConnection(pool, attempt, callback) {
  try {
    await pool.query("SELECT userId FROM Users");
    console.log("Connected to database");
    callback();
  } catch (e) {
    if (attempt < MAX_CONNECTION_ATTEMPTS) {
      console.error(`Attempt ${attempt}: Error connecting to database...\nRestarting...`);
      testConnection(pool, attempt + 1, callback);
    } else {
      console.error(`Final Attempt: Error connecting to database\n`, err);
    }
  }
}

// Serve static files while in production mode.
if (process.env.NODE_ENV === "production") {
  fileApp.use(static(join(__dirname + "/client/", "build")));
  fileApp.use(static(join(__dirname + "/client/", "files")));

  fileApp.get("/*", (req, res) => {
    res.sendFile(join(__dirname + "/client/", "build", "index.html"));
  });

  fileApp.listen(filePort, () => {
    console.log("File server is listening on port", filePort, "\n");
  });
}

// Listen for incoming requests.
testConnection(pool, 1, () => {
  createServer(app).listen(apiPort, () => {
    console.log("API server is listening on port", apiPort, "\n");
  });
});


export default app;
