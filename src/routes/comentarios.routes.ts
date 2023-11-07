import { Router } from "express";
import { CreateComentariosController } from "../modules/comentarios/useCases/createComentario/CreateComentariosController"; 
import { ListComentariosController } from "../modules/comentarios/useCases/lisComentarios/ListComentariosController";
import { ShowComentariosByAtendimentosController } from "../modules/comentarios/useCases/ShowComentariosByAtendimento/ShowComentariosByAtendimentosController";
import { UpdateComentariosController } from "../modules/comentarios/useCases/updateComentarios/UpdateComentariosController";

const comentariosRoutes = Router();

const createComentariosController = new CreateComentariosController()
const listComentariosController = new ListComentariosController()
const showComentariosByAtendimentosController = new ShowComentariosByAtendimentosController()
const updateComentariosController = new UpdateComentariosController();


comentariosRoutes.get("/", listComentariosController.handle)
comentariosRoutes.get("/:atendimentosId/atendimentos/", showComentariosByAtendimentosController.handle)
comentariosRoutes.post("/", createComentariosController.handle)
comentariosRoutes.put("/atendimentos/:atendimentosId/comentarios", updateComentariosController.handle);



export {comentariosRoutes}