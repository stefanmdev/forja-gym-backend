import { Router } from "express";

const router = Router();

// Ruta de comprobación: http://localhost:3000/api
router.get("/", (req, res) => {
  res.status(200).json({ mensaje: "API de FORJA GYM funcionando" });
});

// Acá se montan los routers de cada recurso a medida que se desarrollen.
// Ejemplo: router.use("/recurso", recursoRouter);

export default router;
