# FORJA GYM - Backend

API REST de FORJA GYM, Proyecto Final del Módulo 03 de RollingCode School (Grupo 1). Construida con Node.js, Express y MongoDB (Mongoose).

> **Estado:** base inicial. Todavía no hay modelos, controladores ni endpoints de funcionalidades.

## Tecnologías

- [Node.js](https://nodejs.org/) con ES Modules
- [Express 5](https://expressjs.com/): servidor y rutas
- [Mongoose](https://mongoosejs.com/): conexión con MongoDB
- [cors](https://www.npmjs.com/package/cors), [morgan](https://www.npmjs.com/package/morgan) y [cookie-parser](https://www.npmjs.com/package/cookie-parser)
- [express-validator](https://express-validator.github.io/docs/): validaciones

Dependencias ya declaradas para las próximas funcionalidades: bcryptjs, jsonwebtoken, multer, cloudinary, mercadopago y nodemailer.

## Instalación

1. Clonar el repositorio y entrar a la carpeta:

   ```bash
   git clone https://github.com/stefanmdev/forja-gym-backend.git
   cd forja-gym-backend
   ```

2. Instalar las dependencias (requiere [pnpm](https://pnpm.io/) 12; si tenés otra versión, pnpm descarga la correcta automáticamente):

   ```bash
   pnpm install
   ```

3. Crear el archivo `.env` a partir de `.env.example`:

   ```bash
   cp .env.example .env
   ```

4. Iniciar el servidor en modo desarrollo:

   ```bash
   pnpm dev
   ```

## Scripts

| Script       | Qué hace                                                             |
| ------------ | -------------------------------------------------------------------- |
| `pnpm dev`   | Inicia el servidor leyendo `.env` y lo reinicia al guardar cambios   |
| `pnpm start` | Inicia el servidor sin leer `.env` (las variables las da el hosting) |

## Variables de entorno

| Variable       | Descripción                                                    | Ejemplo                               |
| -------------- | -------------------------------------------------------------- | ------------------------------------- |
| `PORT`         | Puerto del servidor                                            | `3000`                                |
| `MONGO_URI`    | Cadena de conexión a MongoDB. Vacía: arranca sin base de datos | `mongodb://localhost:27017/forja_gym` |
| `CORS_ORIGINS` | Orígenes permitidos, separados por coma                        | `http://localhost:5173`               |

El resto de las variables de `.env.example` se completan al desarrollar cada funcionalidad.

## Comprobar que funciona

Con `pnpm dev` en marcha:

- `http://localhost:3000` muestra la página de bienvenida.
- `http://localhost:3000/api` responde `{ "mensaje": "API de FORJA GYM funcionando" }`.

## Estructura

```text
forja-gym-backend/
├── index.js              # Punto de entrada: crea el servidor y monta /api
├── public/               # Archivos estáticos
└── src/
    ├── config/           # Configuración de servicios externos
    ├── controllers/      # Lógica de cada endpoint
    ├── database/         # Conexión con MongoDB
    ├── middleware/       # Middlewares y validaciones
    ├── models/           # Modelos de Mongoose
    ├── routes/           # Rutas de la API
    ├── server/           # Clase Server de Express
    └── utils/            # Funciones auxiliares
```
