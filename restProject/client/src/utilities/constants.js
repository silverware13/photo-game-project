/*
Author:      Zachary Thomas
Created:     2/2/2022
Modified:    2/2/2022
-----------------------------------------------------------------
*/

// Constants that are referenced throughout the application.
module.exports = Object.freeze({
  USER_POOL: {
    UserPoolId: "us-west-2_Kaqr4pUtc",
    ClientId: "3h2rt1adfd9gidtrf1a1oj3qi0"
  },
  API: "https://swapi.dev/api",
  MIN_TEXT_LENGTH: 1,
  MAX_TEXT_LENGTH: 100,
  MS_PER_SECOND: 1000,
  MS_PER_MINUTE: 60 * 1000,
  MS_PER_HOUR: 60 * 60 * 1000,
  MS_PER_DAY: 24 * 60 * 60 * 1000,
  MS_PER_MONTH: 30 * 24 * 60 * 60 * 1000,
  MS_PER_YEAR: 365 * 24 * 60 * 60 * 1000,
  ALPHABET: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ]
});