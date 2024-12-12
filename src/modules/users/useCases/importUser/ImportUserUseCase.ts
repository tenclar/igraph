import fs from "fs";
import { parse as csvParse } from "csv-parse";
import { IUsersRepository } from "../../../users/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";
//interface
interface IImportUser {
  nome: string;
  nivel: boolean;
  nickname: string;
  status: boolean;
  password: string;
  email: string;
}

//faz a leitura e rotornar os importes de documentos .csv e retorna no banco
@injectable()
class ImportUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usuariosRepository: IUsersRepository
  ) {}

  loadUsers(file: Express.Multer.File): Promise<IImportUser[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const usuarios: IImportUser[] = [];

      const parseFile = csvParse();

      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [nome, nivel, nickname, status, password, email] = line;
          usuarios.push({
            nome,
            nivel,
            nickname,
            status,
            password,
            email,
          });
        })
        //quando for realizada toda a leitura do documeto o mesmo ira retornar no resolve
        .on("end", () => {
          fs.promises.unlink(file.path);
          resolve(usuarios);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const usuarios = await this.loadUsers(file);

    usuarios.map(async (usuario) => {
      const { nome, nivel, nickname, status, password, email } = usuario;

      const existsNick = await this.usuariosRepository.findByNick(nickname);
      const existsEmail = this.usuariosRepository.findByName(email);

      if (!existsNick || !existsEmail) {
        await this.usuariosRepository.create({
          nome,
          nivel,
          nickname,
          status,
          password,
          email,
        });
      }
    });
  }
}

export { ImportUserUseCase };
