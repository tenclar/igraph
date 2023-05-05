import { request, response, Router } from "express";
import { CreateUnidadeController } from "../modules/unidade/useCases/createUnidade/CreateUnidadeController";

const unidadeRoutes = Router();

const createUnidadeController = new CreateUnidadeController()


unidadeRoutes.post("/", createUnidadeController.handle);

export { unidadeRoutes };
