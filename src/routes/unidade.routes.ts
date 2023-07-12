import { Router } from "express";
import { CreateUnidadeController } from "../modules/unidade/useCases/createUnidade/CreateUnidadeController";
import { GetUnidadesController } from "../modules/unidade/useCases/ListUnidades/GetUnidadeController";

const unidadeRoutes = Router();

const createUnidadeController = new CreateUnidadeController();
const getUnidadesController = new GetUnidadesController();

unidadeRoutes.post("/", createUnidadeController.handle);
unidadeRoutes.get("/", getUnidadesController.handle);

export { unidadeRoutes };
