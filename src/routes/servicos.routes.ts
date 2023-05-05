import { request, response, Router } from "express";
import { CreateServicoController } from "../modules/servicos/useCases/createService/CreateServicosController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const servicosRoutes = Router();

const createServicosController = new CreateServicoController()

servicosRoutes.use(ensureAuthenticated)
servicosRoutes.post("/", createServicosController.handle);

export { servicosRoutes };
