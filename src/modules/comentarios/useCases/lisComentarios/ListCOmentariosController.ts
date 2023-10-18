import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListComentariosUseCase } from "./ListComentariosUseCase";

class ListComentariosController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listComentariosUseCase = container.resolve(ListComentariosUseCase);

        const comentarios = await listComentariosUseCase.execute();

        return response.json(comentarios);
        
    }
}

export {ListComentariosController};