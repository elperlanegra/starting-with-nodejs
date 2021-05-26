const http = require("http");
const server = http.createServer(onRequest);
const port = 9999;
const fs = require("fs");

const qs = require("querystring");

server.listen(port, () => {
  console.log("Mi servidor esta corriendo en el localhost:9999");
});

function onRequest(req, res) {
  console.log("Se ha detectado una nueva petición");

  if (req.url == "/") {
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
  } else if (req.url === "/users") {
    if (req.method === "GET") {
      res.setStatus = 202;
      res.setHeader("Content-Type", "text/html");
      res.write("Accediendo a usuarios");
      res.end();
    } else if (req.method == "POST") {
      var datos = "";
      req.on("data", (d) => {
        datos += d;
      });
      req.on("end", () => {
        var post = qs.parse(datos);
        res.end("Datos Recibidos: " + post.nombre);
      });
    } else if (req.method == "PUT") {
      var datos = "";
      req.on("data", (d) => {
        datos += d;
      });
      req.on("end", () => {
        var post = qs.parse(datos);
        res.end("Datos Recibidos: " + post.nombre);
      });
    } else if (req.method == "DELETE") {
      var datos = "";
      req.on("data", (d) => {
        datos += d;
      });
      req.on("end", () => {
        var post = qs.parse(datos);
        res.end("Datos Recibidos: " + post.nombre);
      });
    }
  }
}
