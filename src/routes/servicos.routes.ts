import { request, response, Router } from "express";
import { CreateServicoController } from "../modules/servicos/useCases/createService/CreateServicosController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { GetServicosController } from "../modules/servicos/useCases/ListServicos/GetServicosController";

const servicosRoutes = Router();

const createServicosController = new CreateServicoController()
const getServicosController = new GetServicosController()

//servicosRoutes.use(ensureAuthenticated)
servicosRoutes.post("/", createServicosController.handle);
servicosRoutes.get("/", getServicosController.handle)
export { servicosRoutes };
