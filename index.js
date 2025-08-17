const express = require("express");
const app = express();
const port = 3000;

app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static("public"));

const router = require("./router/client/index.router");

router(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
