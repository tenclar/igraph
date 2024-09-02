import { request, response, Router } from "express";
import multer from "multer";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { ListUserControlller } from "../modules/users/useCases/listUsers/ListUsersController";
import { ImportUserController } from "../modules/users/useCases/importUser/ImportUserController";
import { UpdateUserController } from "../modules/users/useCases/updateUser/UpdateUserController";
import { DeleteUserController } from "../modules/users/useCases/deleteUser/DeleteUserController";
//Rota usuario

const usuariosRoutes = Router();

/*Todos os uploads feitos iram ser armazenados na pasta tmp*/
const upload = multer({
  dest: "./tmp",
});

const createUserController = new CreateUserController();
const importUserController = new ImportUserController();
const listUserController = new ListUserControlller();
const updateUserController = new UpdateUserController()
const deleteUserController = new DeleteUserController()

//Rota para criação de usuarios
usuariosRoutes.post("/", createUserController.handle);

/* Agora essa rota vai retornar de listUserControler onde faz a listagem de usuarios*/
usuariosRoutes.get("/", listUserController.handle);
// Atualizar
usuariosRoutes.put("/:id", updateUserController.handle)

usuariosRoutes.post(
  "/import",
  upload.single("file"),
  importUserController.handle
);

usuariosRoutes.delete('/:id', deleteUserController.handle);

export { usuariosRoutes };
