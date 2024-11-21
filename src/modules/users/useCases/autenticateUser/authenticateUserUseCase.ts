/*import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { compare } from "bcrypt";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
  nickname: string;
  password: string;
}

interface IResponse {
  nickname: string;
  email: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ nickname, password }: IRequest): Promise<IResponse> {
    // Verifica se o usuário existe no banco de dados
    const user = await this.usersRepository.findByNick(nickname);

    if (!user) {
      throw new AppError("Nickname ou senha incorretos");
    }

    // Compara a senha fornecida com a senha armazenada
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Nickname ou senha incorretos");
    }

    // Retorna apenas os dados do usuário
    return {
      nickname: user.nickname,
      email: user.email,
    };
  }
}

export { AuthenticateUserUseCase };
*/