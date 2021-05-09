const http = require("http");
const server = http.createServer(onRequest);
const port = 9999

server.listen(port, () => {
  console.log("Mi servidor esta corriendo en el localhost:9999");
});

function onRequest(req, res) {
  console.log("Se ha detectado una nueva petición");

  res.setHeader("Content-Type", "text/plain");
  res.write("Welcome of the course node js");
  res.end();
}
