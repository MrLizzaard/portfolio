// const
const http = require("http");
const fs = require("fs");

//  run server

http.createServer(makeServer).listen(3000);

//function

function makeServer(request, response) {
  return request
    .on("error", errorOcurred)
    .on("data", isData)
    .on("end", () => {
      response.on("error", errorOcurred);
      response.statusCode = 200;
      response.setHeader("Context-Type", "text/plain");
      response.write("hi\n");
      response.end("the end!");
    });
}

function errorOcurred(err) {
  console.error(err);
}

function isData(data) {
  console.log(data);
}
