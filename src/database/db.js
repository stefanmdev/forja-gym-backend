import mongoose from "mongoose";

const conectarDB = async () => {
  // Mientras no se configure MONGO_URI, el servidor arranca sin base de datos
  if (!process.env.MONGO_URI) {
    console.warn("MONGO_URI no está definida: el servidor arranca sin base de datos");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.info("Conexión con la BD exitosa");
  } catch (error) {
    console.error("Error al conectar con la BD:", error.message);
  }
};

conectarDB(); // se ejecuta al importar este archivo
