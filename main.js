// const
const express = require("express");
const app = express();
const port = 3000;

//  run server

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`server on! http://localhost:${port}`);
});

//function
