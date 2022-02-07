/*
Author:      Zachary Thomas
Created:     2/6/2022
Modified:    2/6/2022
-----------------------------------------------------------------
*/

import { createPool } from "mysql2/promise.js";
import { MAX_CONNECTIONS } from "../constants.js"

// Set the server information using environment variables.
const mysqlPort = process.env.SQL_PORT || 3306;
const mysqlHost = process.env.SQL_HOST;
const mysqlUser = process.env.SQL_USER;
const mysqlPassword = process.env.SQL_PASSWORD;
const mysqlDatabase = process.env.SQL_DB_NAME;

// Create a MySQL resource pool.
const pool = createPool({
  port: mysqlPort,
  host: mysqlHost,
  user: mysqlUser,
  password: mysqlPassword,
  database: mysqlDatabase,
  connectionLimit: MAX_CONNECTIONS,
  multipleStatements: true
});

const _pool = pool;
export { _pool as pool };