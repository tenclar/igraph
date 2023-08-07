import cors from "cors"; // Importe o módulo cors
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "reflect-metadata";
import swaggerUi from "swagger-ui-express";
import "./database";
import { AppError } from "./errors/AppError";
import { router } from "./routes";
import "./shared/container";
import swaggerFile from "./swagger.json";

const app = express();

app.use(cors()); // Use o CORS antes das rotas

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);


app.listen(3333, () => console.log("Servidor rodando"));
