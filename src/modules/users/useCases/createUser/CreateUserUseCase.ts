import {inject, injectable} from "tsyringe"
import { IUsersRepository } from "../../../users/repositories/IUsersRepository"; 
import { hash } from "bcrypt"
import { UsersRepository} from "../../../users/repositories/implementations/UsersRepository";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
  nome: string;
  nivel: number;
  nickname: string;
  status: number;
  password: string;
  email: string;
}

/* classe/ função para cerificar se o usuario criado ja existe*/
@injectable()
class CreateUserUseCase {
  //Mudança de UserRepository para I feitea no dia 7/03
  constructor(
    @inject("UsersRepository")
    private usuariosRepository: IUsersRepository) {}

  async execute({nivel, nome, nickname, status, password, email}: IRequest): Promise<void> {
 
    const nicknameAlreadyExists = await this.usuariosRepository.findByNick(nickname)

    const emailAlreadyExistis = await this.usuariosRepository.findByEmail(email)
    //Cripitografia de senha
    //const passwordHash = await hash(password, 8 )

      if (nicknameAlreadyExists || emailAlreadyExistis) {
        throw new AppError("User already exists!");
      }
      await this.usuariosRepository.create({nome, nivel,nickname, status, password, email});
  }
}

export { CreateUserUseCase };
