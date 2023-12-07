import { container } from "tsyringe";
import { Request, Response } from "express";
import { DeleteServicoUseCase } from "./DeleteServicosUseCase";

class DeleteServicoController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const servicoId = Number(req.params.id);

            const deleteServicoUseCase = container.resolve(
                DeleteServicoUseCase
            );
            await deleteServicoUseCase.execute(servicoId);
            return res.status(204).send()
        } catch(error){
            console.error("Error", error)
            return res.status(400).json({error: "Erro ao deletar o atendimento"})
        }
    }
}

export {DeleteServicoController}