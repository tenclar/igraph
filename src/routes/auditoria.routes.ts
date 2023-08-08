import { Router } from "express";

import { CreateAuditoriaController } from "../modules/auditoria/useCases/createAuditoria/CreateAuditoriaController";
import { ListAuditoriaController } from "../modules/auditoria/useCases/listAuditoria/ListAuditoriaController";


const auditoriaRoutes = Router();

const auditoriaUserController = new CreateAuditoriaController()
const listAuditoriaController = new ListAuditoriaController()


auditoriaRoutes.get("/", listAuditoriaController.handle)
auditoriaRoutes.post("/", auditoriaUserController.handle)

export {auditoriaRoutes}