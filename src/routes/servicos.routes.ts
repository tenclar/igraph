import { request, response, Router } from "express";
import { CreateServicoController } from "../modules/servicos/useCases/createService/CreateServicosController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { GetServicosController } from "../modules/servicos/useCases/ListServicos/GetServicosController";
import { UpdateServicosController } from "../modules/servicos/useCases/updateServicos/UpdateServicosController";

const servicosRoutes = Router();

const createServicosController = new CreateServicoController()
const getServicosController = new GetServicosController()
const updateServicosController = new UpdateServicosController()

//servicosRoutes.use(ensureAuthenticated)
servicosRoutes.post("/", createServicosController.handle);
servicosRoutes.get("/", getServicosController.handle);
servicosRoutes.put("/", updateServicosController.handle);
export { servicosRoutes };
