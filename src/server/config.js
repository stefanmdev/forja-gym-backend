import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import "../database/db.js";

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.middlewares();
  }

  middlewares() {
    // CORS: orígenes permitidos separados por coma en CORS_ORIGINS
    this.app.use(
      cors({
        origin: process.env.CORS_ORIGINS
          ? process.env.CORS_ORIGINS.split(",").map((origen) => origen.trim())
          : ["http://localhost:5173"],
        credentials: true, // permite que viajen las cookies
      })
    );
    this.app.use(morgan("dev")); // muestra en la terminal cada petición HTTP
    this.app.use(express.json()); // permite leer el body en formato JSON
    this.app.use(cookieParser()); // permite leer las cookies de la petición

    // Archivos estáticos de la carpeta public
    const __dirname = dirname(fileURLToPath(import.meta.url));
    this.app.use(express.static(join(__dirname, "../../public")));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.info(`Servidor activo en http://localhost:${this.port}`);
    });
  }
}

export default Server;
