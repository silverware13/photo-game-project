/*
Author:      Zachary Thomas
Created:     2/6/2022
Modified:    2/6/2022
-----------------------------------------------------------------
*/

import { check } from "express-validator";
import {
  MIN_PASSWORD_LENGTH,
  MAX_PASSWORD_LENGTH,
  MIN_USERNAME_LENGTH,
  MAX_USERNAME_LENGTH
} from "../constants.js";

export const loginUserVal = Object.freeze({
  validation: [
    check("email").isEmail(),
    check("password").isLength({min: MIN_PASSWORD_LENGTH, max: MAX_PASSWORD_LENGTH})
  ]
});

export const createUserVal = Object.freeze({
  validation: [
    check("email").isEmail(),
    check("name").isLength({min: MIN_USERNAME_LENGTH, max: MAX_USERNAME_LENGTH}),
    check("password").isLength({min: MIN_PASSWORD_LENGTH, max: MAX_PASSWORD_LENGTH})
  ]
});

export const getQuestionVal = Object.freeze({
  validation: [
    check("albumId").isInt({min: 1, max: 4294967295})
  ]
});