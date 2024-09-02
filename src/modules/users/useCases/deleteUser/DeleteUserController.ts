import { container } from "tsyringe";
import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

class DeleteUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const usuarioId = Number(req.params.id);

            const deleteUsuarioUseCase = container.resolve(
                DeleteUserUseCase                                                                                                    
            );
            await deleteUsuarioUseCase.execute(usuarioId);
            return res.status(204).send()
        } catch(error){
            console.error("Error", error)
            return res.status(400).json({error: "Erro ao deletar o usuario"})
        }
    }
}

export {DeleteUserController}