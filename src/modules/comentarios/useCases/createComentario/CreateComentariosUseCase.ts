import { inject, injectable } from "tsyringe";
import { IComentariosRepository } from "../../repositories/IComentariosRepository";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
  comentarios: string;
  atendimentos_id: number;
}

@injectable()
class CreateComentariosUseCase {
  constructor(
    @inject("ComentariosRepository")
    private comentariosRepository: IComentariosRepository

  ) {}
  async execute({
    comentarios,atendimentos_id
  }: IRequest): Promise<void> {
    
    const comentario = {
      comentarios,
      atendimentos_id
    };

    await this.comentariosRepository.create(comentario);
  }
}

export { CreateComentariosUseCase };
  