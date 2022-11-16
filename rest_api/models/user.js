/*
Author:      Zachary Thomas
Created:     2/6/2022
Modified:    2/10/2022
-----------------------------------------------------------------
*/

import { pool } from "../utilities/database/mysqlPool.js";
import { hashPassword, verifyHash } from "../utilities/authentication/saltHash.js";

// Login a user.
export async function loginUser(email, password) {
  try {
    // Check if user exists.
    const sql = "SELECT user_id, email, name, admin, hash"
    + " FROM user"
    + " WHERE email = ?;";
    const result = await pool.query(sql, [email]);

    if (!result[0].length) {
      return { error: "Incorrect email address or password.", status: 400 };
    }

    // Verify that the password is correct.
    if (verifyHash(password, result[0][0].hash)) {
      const responseBody = {
        userId: result[0][0].user_id,
        email: result[0][0].email,
        name: result[0][0].name,
        admin: result[0][0].admin
      };
      return responseBody;

    } else {
      return { error: "Incorrect email address or password.", status: 400 };
    }
  } catch (e) {
    throw Error(e);
  }
}

// Create a new user.
export async function createUser(email, name, password) {
  try {
    // Make sure that the email address is not already in use.
    let sql = "SELECT *"
    + " FROM user"
    + " WHERE email = ?;";
    let result = await pool.query(sql, [email]);

    if (result[0].length) {
      return { error: "Email address is already in use.", status: 400 };
    }

    // Create the new user.
    sql = "INSERT INTO user (email, name, admin, hash)"
    + " VALUES(?, ?, 0, ?);";
    const hash = hashPassword(password);
    result = await pool.query(sql, [email, name, hash]);

    const responseBody = {
      userId: result[0].insertId
    };
    return responseBody;

  } catch (e) {
    throw Error(e);
  }
}
