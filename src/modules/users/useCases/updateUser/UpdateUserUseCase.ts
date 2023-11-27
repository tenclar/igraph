import { IUsersRepository } from "../../repositories/IUsersRepository";

interface UpdateUserRequest {
  id: number;
  nome: string;
  nickname: string;
  password: string;
  nivel: number;
  status: number;
}

class UpdateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: UpdateUserRequest): Promise<void> {
    const { id, nome, nickname, password, nivel, status } = data;

    const usuario = await this.usersRepository.findById(id);

    if (!usuario) {
      throw new Error("Usuario Não encontrado");
    }

    usuario.nome = nome;
    usuario.nivel = nivel;
    usuario.status = status;
    //adcionado para teste
    usuario.nickname = nickname;
    usuario.password = password

    await this.usersRepository.save(usuario);
  }
}

export { UpdateUserUseCase };
