/*
Author:      Zachary Thomas
Created:     2/6/2022
Modified:    2/6/2022
-----------------------------------------------------------------
*/

// Constants that are referenced throughout the application.
module.exports = Object.freeze({
  MIN_PASSWORD_LENGTH = 8,
  MAX_PASSWORD_LENGTH = 100,
  MAX_CONNECTION_ATTEMPTS = 5,
  MAX_CONNECTIONS = 100,
  COOKIE_EXPIRES_MS = 8 * 60 * 60 * 1000,
  JWT_EXPIRES_HR = "8h",
  MIN_USER_ID = 1,
  MAX_USER_ID = 4294967295
});