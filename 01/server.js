//Requerimos el modulo http es el modulo mas basco para poder crear servidors de applicaciones web
var http = require("http");

var miPeticion = function (req, res) {
  //Enviamdd una respuesta con metodo writeHead el primer parametro es el codigo http n este caso 200 que significa ok y un objeto con el tipo de contendo que enviaremos en este caso sera texto plano
  res.writeHead("200", { "content-type": "text/plain" });

  if (req.url == "/") {
    //Aqui enviare la respueesta con metodo end
    res.end("HolaMundo");
  }
  if (req.url == "/cursos") {
    res.end("esta es la url de cursos");
  }
};

//El metodo create server recibe un callback  luego lo concatenamos con un .listen el cual tendra el numero del puerto en el que escuchara nuestro servidor
//El req es la peticion que le envie al servidor y el res es la repuest que le daremos al cliente
var server = http.createServer(miPeticion).listen(3000);
