import { Router } from "express";

import { AuthenticateUserController } from "../modules/users/useCases/autenticateUser/autenticateUserController";

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

authenticateRoutes.post("/auth", authenticateUserController.handle);
export {authenticateRoutes};