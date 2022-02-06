/*
Author:      Zachary Thomas
Created:     2/6/2022
Modified:    2/6/2022
-----------------------------------------------------------------
*/

import { pool } from "../utilities/database/mysqlPool.js";
import { hashPassword, verifyHash } from "../utilities/authentication/saltHash.js";

// Login a user.
export async function loginUser(email, password) {
  try {
    // Check if user exists.
    const sql = "SELECT user_id, username, email, admin, hash"
    + " FROM user"
    + " WHERE email = ?;";
    const result = await pool.query(sql, [email]);

    if (!result[0].length) {
      return {error: "Incorrect email address or password."};
    }

    // Verify that the password is correct.
    if (verifyHash(password, result[0][0].hash)) {
      const responseBody = {
        userId: result[0][0].user_id,
        username: result[0][0].username,
        email: result[0][0].email,
        admin: result[0][0].admin
      };
      return responseBody;

    } else {
      return {error: "Incorrect email address or password."};
    }
  } catch (e) {
    throw Error(e);
  }
}

// Create a new user.
export async function createUser(email, password) {
  try {
    // Make sure that the email address is not already in use.
    let sql = "SELECT *"
    + " FROM user"
    + " WHERE email = ?;";
    let result = await pool.query(sql, email);

    if (result[0].length) {
      return {error: "Email address is already in use."};
    }

    // Create the new user.
    sql = "INSERT INTO Users (email, admin, hash)"
    + " VALUES(?, 0, ?);";
    hash = hashPassword(password);
    result = await pool.query(sql, [email, hash]);

    const responseBody = {
      userId: result[0].insertId
    };
    return responseBody;

  } catch (e) {
    throw Error(e);
  }
}
