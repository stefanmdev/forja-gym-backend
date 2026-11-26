import Server from "./src/server/config.js";
import router from "./src/routes/index.routes.js";

// Crear el servidor
const server = new Server();

// Montar las rutas de la API: http://localhost:3000/api
server.app.use("/api", router);

// Escuchar el puerto
server.listen();
