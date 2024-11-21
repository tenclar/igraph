import { ICreateUserDTO } from "../dtos/IcreateUserDTO";
import { User } from "../entities/User";

interface IUsersRepository {
  findByName(nome: string): Promise<User | undefined>;
  findByNick(nickname: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  findById(id: number): Promise<User | undefined>;
  save(usuario: User): Promise<User>;
  list(): Promise<User[]>;
  create(data: ICreateUserDTO): Promise<User>;
  delete(usuario: User): Promise<void>;
}

export { IUsersRepository };
