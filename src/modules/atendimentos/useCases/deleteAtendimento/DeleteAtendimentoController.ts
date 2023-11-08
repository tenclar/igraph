import { container } from "tsyringe";
import { Request, Response } from "express";
import { DeleteAtendimentoUseCase } from "./DeleteAtendimentoUseCase";

class DeleteAtendimentoController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const atendimentoId = Number(req.params.id);
      
      const deleteAtendimentoUseCase = container.resolve(
        DeleteAtendimentoUseCase
        );
        
        await deleteAtendimentoUseCase.execute(atendimentoId);
      return res.status(204).send();
    } catch (error) {
      console.error("Erro ", error)
      return res.status(400).json({ error: "Erro ao Deletar Atendimento" });
    }
  }
}

export { DeleteAtendimentoController };
