import { IUsersRepository } from "../../../users/repositories/IUsersRepository";
import { User } from "../../../users/entities/User";
import { inject, injectable } from "tsyringe";

@injectable()
class ListUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usuariosRepository: IUsersRepository) {}

  async execute():Promise <User[]> {
    const usuarios = await this.usuariosRepository.list()

    return usuarios;
  }
}

export { ListUserUseCase };
