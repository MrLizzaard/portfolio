// const
const express = require("express");
const app = express();
const port = 3000;

//  run server

app.use(express.static(__dirname + "/public"));

app.listen(port, function () {
  console.log(`server on! http://localhost:${port}`);
});

//function
