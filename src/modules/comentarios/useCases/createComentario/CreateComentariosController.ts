import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateComentariosUseCase } from "./CreateComentariosUseCase";

class CreateComentariosController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { comentarios, atendimentos_id } = request.body;
            
            console.log("Recebendo dados de criação de comentário:", comentarios);

            const createComentariosUseCase = container.resolve(CreateComentariosUseCase);

            const createdComentario = await createComentariosUseCase.execute({ comentarios, atendimentos_id });

            console.log("Comentário criado com sucesso:", createdComentario);

            return response.status(201).json(createdComentario);
        } catch (error) {
            console.error("Erro ao criar comentário:", error);
            return response.status(500).json({ error: "Erro interno do servidor" });
        }
    }
}

export { CreateComentariosController };
