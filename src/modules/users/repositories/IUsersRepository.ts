import { ICreateUserDTO } from "../dtos/IcreateUserDTO";
import { User } from "../entities/User";

interface IUsersRepository {
  findByName(nome: string): Promise<User | undefined>;
  findByNick(nickname: string): Promise<User | undefined>;
  findByEmail(email: string):Promise<User | undefined>;
  findById(id: number):Promise<User | undefined>;
  list(): Promise <User[]>;
  create({nome, nivel, nickname, status, password, email}: ICreateUserDTO): void ;
}

export { IUsersRepository };
