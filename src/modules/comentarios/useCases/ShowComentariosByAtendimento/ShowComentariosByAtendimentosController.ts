import { Request, Response } from "express";
import { container } from "tsyringe";
import { ShowComentariosByAtendimentosUseCase } from "./ShowComentariosByAtendimentosUseCase";

class ShowComentariosByAtendimentosController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { atendimentosId } = request.params;
        
        const showComentariosUseCase = container.resolve(ShowComentariosByAtendimentosUseCase);

        const comentarios = await showComentariosUseCase.execute(Number(atendimentosId));

        return response.json(comentarios);
        
    }
}

export {ShowComentariosByAtendimentosController};