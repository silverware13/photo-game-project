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
} from "../constants";

const loginUser = Object.freeze({
  validation: [
    check("email").isEmail(),
    check("password").isLength({min: MIN_PASSWORD_LENGTH, max: MAX_PASSWORD_LENGTH})
  ]
});
const _loginUser = loginUser;
export { _loginUser as loginUser };

const postUser = Object.freeze({
  validation: [
    check("email").isEmail(),
    check("password").isLength({min: MIN_PASSWORD_LENGTH, max: MAX_PASSWORD_LENGTH})
  ]
});
const _postUser = postUser;
export { _postUser as postUser };