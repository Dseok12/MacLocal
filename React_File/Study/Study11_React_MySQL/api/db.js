import mysql from 'mysql';

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "dnjstjr12@",
  database: "blog",
  // user: process.env.APP_USER_ID,
  // password: process.env.APP_USER_PASSWORD,
  // database: process.env.APP_USER_DATABASE
});