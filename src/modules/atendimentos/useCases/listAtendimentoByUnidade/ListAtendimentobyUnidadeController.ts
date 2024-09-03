import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAtendimentoByUnidadeUseCase } from "./ListAtendimentoUnidadeUseCase";

class ListAtendimentoByUnidadeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listAtendimentoByUnidadeUseCase = container.resolve(ListAtendimentoByUnidadeUseCase);

    const atendimentos = await listAtendimentoByUnidadeUseCase.execute({ unidadeId: String(id) });

    return response.json(atendimentos);
  }
}

export { ListAtendimentoByUnidadeController };
