import { Router } from "express";

import { CreateComentariosController } from "../modules/comentarios/useCases/createComentarios/CreateComentariosController";

const comentariosRoutes = Router();

const comentariosUserController = new CreateComentariosController()

comentariosRoutes.get("/:atendimento", comentariosUserController.handle)
comentariosRoutes.post("/", comentariosUserController.handle)


export {comentariosRoutes}