import { request, response, Router } from "express";
import multer from "multer";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { ListUserControlller } from "../modules/users/useCases/listUsers/ListUsersController";
import { ImportUserController } from "../modules/users/useCases/importUser/ImportUserController";

//Rota usuario

const usuariosRoutes = Router();

/*Todos os uploads feitos iram ser armazenados na pasta tmp*/
const upload = multer({
  dest: "./tmp",
});

const createUserController = new CreateUserController();
const importUserController = new ImportUserController();
const listUserController = new ListUserControlller();


//Rota para criação de usuarios
usuariosRoutes.post("/", createUserController.handle);

/* Agora essa rota vai retornar de listUserControler onde faz a listagem de usuarios*/
usuariosRoutes.get("/", listUserController.handle);

usuariosRoutes.post(
  "/import",
  upload.single("file"),
  importUserController.handle
);

export { usuariosRoutes };
