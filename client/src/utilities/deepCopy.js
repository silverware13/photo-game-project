/*
Author:      Zachary Thomas
Created:     2/2/2022
Modified:    2/2/2022
-----------------------------------------------------------------
*/

// Creates a deep copy of an object or array (arrays are also objects in JS).
export default function deepCopy(object) {
  return JSON.parse(JSON.stringify(object));
}