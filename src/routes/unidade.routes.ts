import { Router } from "express";
import { CreateUnidadeController } from "../modules/unidade/useCases/createUnidade/CreateUnidadeController";
import { GetUnidadesController } from "../modules/unidade/useCases/ListUnidades/GetUnidadeController";
import { UpdateUnidadesController } from "../modules/unidade/useCases/updateUnidade/UpdateUnidadeController";
import { DeleteUnidadeController } from "../modules/unidade/useCases/deleteUnidade/DeleteUnidadeController";

const unidadeRoutes = Router();

const createUnidadeController = new CreateUnidadeController();
const getUnidadesController = new GetUnidadesController();
const updateUnidadeController = new UpdateUnidadesController();
const deleteUnidadeController = new DeleteUnidadeController()

unidadeRoutes.post("/", createUnidadeController.handle);
unidadeRoutes.get("/", getUnidadesController.handle);
unidadeRoutes.put("/:id", updateUnidadeController.handle);
unidadeRoutes.delete('/:id', deleteUnidadeController.handle);

export { unidadeRoutes };
