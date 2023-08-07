import { inject, injectable } from "tsyringe";
import { IComentariosRepository } from "../../repositories/IComentariosRepository";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
  comentarios: string;
}

@injectable()
class CreateComentariosUseCase {
  constructor(
    @inject("AuditoriaRepository")
    private auditoriaRepository: IComentariosRepository
  ) {}
  async execute({
    comentarios,
  }: IRequest): Promise<void> {
    
    const comentario = {
      comentarios,
    };

    await this.auditoriaRepository.create(comentario);
  }
}

export { CreateComentariosUseCase };
