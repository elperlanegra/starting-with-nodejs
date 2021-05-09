const http = require("http");
const server = http.createServer(onRequest);
const port = 9999;
const fs = require("fs");

server.listen(port, () => {
  console.log("Mi servidor esta corriendo en el localhost:9999");
});

function onRequest(req, res) {
  console.log("Se ha detectado una nueva petición");

  fs.readFile("index.html", (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        res.setStatus = 404;
        console.log("No se ha encontrado el archivo");
      } else {
        res.setStatus = 500;
        console.log("ha ocurrido un error");
      }
    } else {
      res.setStatus = 202;
      res.setHeader("Content-Type", "text/html");
      res.write(content);
      res.end();
    }
  });
}
