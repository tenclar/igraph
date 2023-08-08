import { Router } from "express";

import { CreateComentariosController } from "../modules/comentarios/useCases/createComentarios/CreateComentariosController";

const comentariosRoutes = Router();

const comentariosUserController = new CreateComentariosController()

comentariosRoutes.get("/", comentariosUserController.handle)

export {comentariosRoutes}