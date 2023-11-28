import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../../dtos/IcreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

//USUARIO VIROU USERS
// classe Usuario Repository exportada para usuario.routes
class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }
  save(usuario: User): Promise<User[]> {
    throw new Error("Method not implemented.");
  }

  async create({
    id,
    nome,
    nivel,
    nickname,
    status,
    password,
    email,
  }: ICreateUserDTO): Promise<void> {
    const users = this.repository.create({
      id,
      nome,
      nivel,
      nickname,
      status,
      password,
      email,
    });
    await this.repository.save(users);
  }

  // consulta para realizar listagem de usuarios que foram criados pelo adm
  async list(): Promise<User[]> {
    const user = await this.repository.find();
    return user;
  }

  // fazer consulta atravez do nome do usuario
  async findByName(nome: string): Promise<User | undefined> {
    const usuario = await this.repository.findOne({ nome });
    return usuario;
  }
  async findByNick(nickname: string): Promise<User | undefined> {
    const usuario = await this.repository.findOne({ nickname });
    return usuario;
  }
  async findByEmail(email: string): Promise<User | undefined> {
    const usuario = await this.repository.findOne({ email });
    return usuario;
  }

  async findById(id: number): Promise<User | undefined> {
    const usuario = await this.repository.findOne({ id });
    return usuario;
  }

  
}
export { UsersRepository };
