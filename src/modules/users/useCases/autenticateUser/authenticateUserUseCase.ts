import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { sign } from "jsonwebtoken";
import { compare } from "bcrypt";
import { AppError } from "../../../../errors/AppError";
//Autenticação de usuario

interface IRequest {
  nickname: string;
  password: string;
}

interface IResponse {
  user: {
    nickname: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ nickname, password }: IRequest) {
    //Usuario Exite
    const user = await this.usersRepository.findByNick(nickname);

    if (!user) {
      throw new AppError("Nickname or Password incorret!");
    }

    //Senha está correta
    const passwordMath = await compare(password, user.password);

    if (!passwordMath) {
      throw new AppError("Nickname or Password incorrect");
    }

    const token = sign({}, "f24982c4a1a705dc697d36b8098cfa8c", {
      subject: String(user.id),
      expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        nickname: user.nickname,
        email: user.email,
      },
    };

    //Gera Tolken
    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
