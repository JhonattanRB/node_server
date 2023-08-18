const http = require("http");
const PORT = 3000;

const tareas = [
  { id: 1, nombre: "Aprender Javascript", completado: false },
  {
    id: 2,
    nombre: "Aprender Node Js y el módulo HTTP",
    completado: true,
  },
  { id: 3, nombre: "Crear un servidor sencillo", completado: false },
];

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/tareas") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(tareas));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 No encontrado");
  }
});

server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
