import { request, response, Router } from "express";
import { CreateAtendimentoController } from "../modules/atendimentos/useCases/createAtendimento/CreateAtendimentoController";

const atendimentoRoutes = Router();

const createAtendimentoController = new CreateAtendimentoController()


atendimentoRoutes.post("/", createAtendimentoController.handle);

export { atendimentoRoutes };
