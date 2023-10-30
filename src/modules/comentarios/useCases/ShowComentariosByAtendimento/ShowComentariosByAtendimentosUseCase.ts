import { inject, injectable } from "tsyringe";
import { IComentariosRepository } from "../../repositories/IComentariosRepository";
import { Comentarios } from "../../entities/Comentarios";
import { AppError } from "../../../../errors/AppError";



@injectable()
class ShowComentariosByAtendimentosUseCase {
    constructor(
        @inject("ComentariosRepository")
        private comentariosRepository: IComentariosRepository
    ) {}

    async execute( atendimentosId: number): Promise<Comentarios> {
        const comentarios =  await this.comentariosRepository.showByAtendimento(atendimentosId);          
        
        if (!comentarios) {
            throw new AppError('comentarios not Found');
          }
        return comentarios ;
    }
} 

export {ShowComentariosByAtendimentosUseCase}



