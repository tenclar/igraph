import { container } from "tsyringe";
import { Request, Response } from "express";
import { DeleteUnidadeUseCase } from "./DeleteUnidadeUseCase";

class DeleteUnidadeController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const unidadeId = Number(req.params.id);

            const deleteUnidadeUseCase = container.resolve(
                DeleteUnidadeUseCase                                                                                                    
            );
            await deleteUnidadeUseCase.execute(unidadeId);
            return res.status(204).send()
        } catch(error){
            console.error("Error", error)
            return res.status(400).json({error: "Erro ao deletar a unidade"})
        }
    }
}

export {DeleteUnidadeController}