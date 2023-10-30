import { getRepository, Repository } from "typeorm";
import { Comentarios } from "../../entities/Comentarios";
import { IComentariosRepository } from "../IComentariosRepository";
import { ICreateComentariosDTO } from "../IComentariosRepository";

class ComentariosRepository implements IComentariosRepository {
  private repository: Repository<Comentarios>;

  constructor() {
    this.repository = getRepository(Comentarios);
  }

  async create({ comentarios, atendimentos_id }: ICreateComentariosDTO): Promise<Comentarios> {
    
    const comentario = this.repository.create({
      comentarios,
      atendimentos_id
    });
    console.log(comentario)
    await this.repository.save(comentario); // Persiste o comentário no banco de dados

    return comentario; // Retorna o comentário criado, incluindo o ID
  }

  async list(): Promise<Comentarios[]> {
    return await this.repository.find();
  }

  async showByAtendimento(atendimentosId: number): Promise<Comentarios | undefined> {
    return await this.repository.findOne(
      { 
         where: {      
          atendimentos_id: atendimentosId
      }
    });
  }
}

export { ComentariosRepository };
