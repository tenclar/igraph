import { UsersRepository } from "../../../users/repositories/implementations/UsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const userRepository = new UsersRepository();
const creteUserUseCase = new CreateUserUseCase(userRepository);
const createUserController = new CreateUserController();

export {createUserController}
