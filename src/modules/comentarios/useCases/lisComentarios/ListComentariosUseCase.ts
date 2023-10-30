import { inject, injectable } from "tsyringe";
import { IComentariosRepository } from "../../repositories/IComentariosRepository";
import { Comentarios } from "../../entities/Comentarios";



@injectable()
class ListComentariosUseCase {
    constructor(
        @inject("ComentariosRepository")
        private comentariosRepository: IComentariosRepository
    ) {}

    async execute(): Promise<Comentarios[]> {
        const comentarios =  await this.comentariosRepository.list();          
        
        return comentarios;
    }
} 

export {ListComentariosUseCase}



