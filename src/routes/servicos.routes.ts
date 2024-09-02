import { request, response, Router } from "express";
import { CreateServicoController } from "../modules/servicos/useCases/createService/CreateServicosController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { GetServicosController } from "../modules/servicos/useCases/ListServicos/GetServicosController";
import { UpdateServicosController } from "../modules/servicos/useCases/updateServicos/UpdateServicosController";
import { DeleteServicoController } from "../modules/servicos/useCases/deleteServicos/DeleteServicosController";

const servicosRoutes = Router();

const createServicosController = new CreateServicoController()
const getServicosController = new GetServicosController()
const updateServicosController = new UpdateServicosController()
const deleteServicoController = new DeleteServicoController()

//servicosRoutes.use(ensureAuthenticated)
servicosRoutes.post("/", createServicosController.handle);
servicosRoutes.get("/", getServicosController.handle);
servicosRoutes.put("/:id", updateServicosController.handle);
servicosRoutes.delete("/:id", deleteServicoController.handle);
export { servicosRoutes };
