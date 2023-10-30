import { Router } from "express";

import { CreateComentariosController } from "../modules/comentarios/useCases/createComentarios/CreateComentariosController";
import { ListComentariosController } from "../modules/comentarios/useCases/lisComentarios/ListComentariosController";
import { ShowComentariosByAtendimentosController } from "../modules/comentarios/useCases/ShowComentariosByAtendimento/ShowComentariosByAtendimentosController";

const comentariosRoutes = Router();

const createComentariosController = new CreateComentariosController()
const listComentariosController = new ListComentariosController()
const showComentariosByAtendimentosController = new ShowComentariosByAtendimentosController()
comentariosRoutes.get("/", listComentariosController.handle)
comentariosRoutes.get("/:atendimentosId/atendimentos/", showComentariosByAtendimentosController.handle)
comentariosRoutes.post("/", createComentariosController.handle)


export {comentariosRoutes}