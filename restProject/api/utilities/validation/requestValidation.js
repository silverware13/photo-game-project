/*
Author:      Zachary Thomas
Created:     2/6/2022
Modified:    2/6/2022
-----------------------------------------------------------------
*/

import { check } from "express-validator";
import {
  MIN_PASSWORD_LENGTH,
  MAX_PASSWORD_LENGTH
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
    check("password").isLength({min: MIN_PASSWORD_LENGTH, max: MAX_PASSWORD_LENGTH})
  ]
});