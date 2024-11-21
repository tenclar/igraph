import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../../dtos/IcreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";
import { hash } from "bcrypt";
import { AppError } from "../../../../errors/AppError";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }


  async delete(usuario: User): Promise<void> {
    await this.repository.remove(usuario);
  }

  async save(usuario: User): Promise<User> {
    return this.repository.save(usuario);
  }

  async create(data: ICreateUserDTO): Promise<User> {
    const existingUser = await this.findByNick(data.nickname) || await this.findByEmail(data.email);

    if (existingUser) {
      throw new AppError("Nickname or Email already exists", 400);
    }

    const hashedPassword = await hash(data.password, 10);
    const user = this.repository.create({ ...data, password: hashedPassword });
    await this.repository.save(user);
    return user;
  }

  async list(): Promise<User[]> {
    return this.repository.find();
  }

  async findByName(nome: string): Promise<User | undefined> {
    const user = await this.repository.findOne({ where: { nome } });
    return user || undefined;
  }
  
  async findByNick(nickname: string): Promise<User | undefined> {
    const user = await this.repository.findOne({ where: { nickname } });
    return user || undefined;
  }
  
  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.repository.findOne({ where: { email } });
    return user || undefined;
  }
  
  async findById(id: number): Promise<User | undefined> {
    const user = await this.repository.findOne({ where: { id } });
    return user || undefined;
  }
  
}

export { UsersRepository };
