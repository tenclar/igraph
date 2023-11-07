import { inject, injectable } from "tsyringe";
import { IComentariosRepository } from "../../repositories/IComentariosRepository";

interface UpdateComentarioUseRequest{
    atendimentos_id: number;
    comentarios: string
}

@injectable()
class UpdateComentariosUseCase {
    constructor(
      @inject("ComentariosRepository")      
      private comentarioRepository: IComentariosRepository
      ) {}

    async execute(data: UpdateComentarioUseRequest): Promise<void> {

      const { atendimentos_id, comentarios} = data;  
      const comentario = await this.comentarioRepository.showByAtendimento(atendimentos_id);
  
      if (!comentario) {
        throw new Error('Comentário não encontrado');
      }
  
      // Atualize o texto do comentário
      comentario.comentarios = comentarios;
  
      // Salve as alterações no banco de dados
      await this.comentarioRepository.save(comentario);
    }
  }
  
  export { UpdateComentariosUseCase };