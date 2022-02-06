/*
Author:      Zachary Thomas
Created:     2/6/2022
Modified:    2/6/2022
-----------------------------------------------------------------
*/

import { randomBytes, pbkdf2Sync } from "crypto";

// Create password hash.
export function hashPassword(password) {
  const salt = randomBytes(16).toString("hex");
  const hash = pbkdf2Sync(password, salt, 2048, 32, "sha512").toString("hex");
  return `${salt}$${hash}`;
}

// Verify password hash.
export function verifyHash(password, original) {
  if (typeof password !== "string" || typeof original !== "string") {
    return false;
  }

  const originalHash = original.split("$")[1];
  const salt = original.split("$")[0];
  const hash = pbkdf2Sync(password, salt, 2048, 32, "sha512").toString("hex");

  return hash === originalHash;
}