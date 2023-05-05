/*import { UsersRepository } from "../../../users/repositories/implementations/UsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

export default (): CreateUserController => {
  const userRepository = new UsersRepository();

  const creteUserUseCase = new CreateUserUseCase(userRepository);

  const createUserController = new CreateUserController(creteUserUseCase);
  
  return createUserController;
};
*/
