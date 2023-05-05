import { ICreateUserDTO } from "../dtos/IcreateUserDTO";
import { User } from "../entities/User";

interface IUsersRepository {
  findByName(nome: string): Promise <User>;
  findByNick(nickname: string): Promise <User>;
  findByEmail(email: string):Promise <User>;
  findById(id: number):Promise<User>;
  list(): Promise <User[]>;
  create({nome, nivel, nickname, status, password, email}: ICreateUserDTO): void ;
}

export { IUsersRepository };
