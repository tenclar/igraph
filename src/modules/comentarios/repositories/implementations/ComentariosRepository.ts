import { getRepository, Repository } from "typeorm";
import { Comentarios } from "../../entities/Comentarios";
import { IComentariosRepository} from "../IComentariosRepository";
import { ICreateComentariosDTO } from "../IComentariosRepository"; 

class ComentariosRepository implements IComentariosRepository {
  private repository: Repository<Comentarios>;

  constructor() {
    this.repository = getRepository(Comentarios);
  }

  async create({ comentarios }: ICreateComentariosDTO): Promise<void> {
    const comentario = this.repository.create({
      comentarios,
    });
  }

  async list(): Promise<Comentarios[] | undefined> {
    const comentariosList = await this.repository.find();
    return comentariosList;
  }
}

export { ComentariosRepository };
