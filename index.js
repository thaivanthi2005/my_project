const express = require("express");
const app = express();
app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static("public"));
require("dotenv").config();

const database = require("./config/database.js");

database.connect();

const port = process.env.PORT || 3000;

const router = require("./router/client/index.router");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
