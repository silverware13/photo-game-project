/*
Author:      Zachary Thomas
Created:     2/6/2022
Modified:    2/6/2022
-----------------------------------------------------------------
*/

import { pool } from "../database/mysqlPool.js";
import { parse, serialize } from "cookie";
import jwt from "jsonwebtoken";
import assert from "assert";
import validator from "validator";
import {
  MIN_USER_ID,
  MAX_USER_ID,
  COOKIE_EXPIRES_MS,
  JWT_EXPIRES_HR
} from "../constants.js";

// Only allow admins to continue.
export async function requireAdmin(userId) {
  try {
    const sql = "SELECT admin"
    + " FROM user"
    + " WHERE user_id = ?;";

    const results = await pool.query(sql, userId);

    assert(results[0].length, "User not found");
    assert(results[0][0].admin >= minRole, "User is not an admin");

    return true;

  } catch (e) {
    console.error("Only admins are allowed to perform this action");
    return false;
  }
}

// If the user is unauthorized then they will receive a 401 error and the next function will be ignored.
export function requireAuth(req, res, next) {
  try {
    const cookieObj = parse(`${req.headers.cookie}`);

    // Ensure that all of expected cookies are present.
    assert(cookieObj === Object(cookieObj), "No cookie provided with request");
    assert(cookieObj.userId, "No user ID cookie provided with request");
    assert(cookieObj.auth, "No auth cookie provided with request");

    // get the JWT from the cookie.
    const token = cookieObj.auth;

    // Use the JWT service to verify the JWT.
    // This function call throws an error if the JWT is invalid.
    const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // Check to make sure the user ID is valid.
    assert(validator.isInt(`${payload.sub}`, {min: MIN_USER_ID, max: MAX_USER_ID}));

    // If verified, add an extra property to the request object.
    req.auth = {}
    req.auth.userId = payload.sub;

    // If there were no issues we route to the next middleware.
    next();

  } catch (e) {
    console.error(`Authentication error: ${e}`);
    res.status(401).send({ error: "Missing or invalid authorization credentials." });
  }
}

// Generate a JWT for a specific user.
export function generateAuthToken(userId) {
  const payload = {
    sub: userId
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {expiresIn: JWT_EXPIRES_HR});
  return token;
}

// Set user cookies for general data and authentication.
export function setAuthCookie(res, token, userId, email, admin) {
  res.setHeader("Set-Cookie", [
    serialize("userId", userId, {
      path: "/",
      sameSite: true,
      expires: new Date(Date.now() + COOKIE_EXPIRES_MS),
      maxAge: COOKIE_EXPIRES_MS / 1000,
    }),
    serialize("email", email, {
      path: "/",
      sameSite: true,
      expires: new Date(Date.now() + COOKIE_EXPIRES_MS),
      maxAge: COOKIE_EXPIRES_MS / 1000,
    }),
    serialize("admin", admin, {
      path: "/",
      sameSite: true,
      expires: new Date(Date.now() + COOKIE_EXPIRES_MS),
      maxAge: COOKIE_EXPIRES_MS / 1000,
    }),
    serialize("auth", token, {
      path: "/",
      sameSite: true,
      expires: new Date(Date.now() + COOKIE_EXPIRES_MS),
      maxAge: COOKIE_EXPIRES_MS / 1000,
    })
  ]);
}