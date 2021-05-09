const http = require('http')
const server = http.createServer(onRequest);

server.listen(9999)
console.log("Mi servidor esta corriendo en el localhost:9999")

function onRequest(request, respose) {
    console.log("Se ha detectado una nueva petición")
    
}