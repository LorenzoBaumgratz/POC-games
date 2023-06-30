import pg from "pg";

const { Pool } = pg;

const db = new Pool({
  host:"localhost",
  port:5432,
  user:"postgres",
  password:"macacoLH04",
  database: "ts"
});

export {db}