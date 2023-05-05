import { Router } from "express";

import { CreateAuditoriaController } from "../modules/auditoria/useCases/createAuditoria/CreateAuditoriaController";

const auditoriaRoutes = Router();

const auditoriaUserController = new CreateAuditoriaController()

auditoriaRoutes.post("/", auditoriaUserController.handle)

export {auditoriaRoutes}