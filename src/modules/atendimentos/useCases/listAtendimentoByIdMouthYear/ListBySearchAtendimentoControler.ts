import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAtendimentoUseCase } from "./ListBySearchAtendimentoUseCase";

class ListAtendimentoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { unidadeId, ano, mes } = request.params;

    const listAtendimentoUseCase = container.resolve(ListAtendimentoUseCase);

    const atendimentos = await listAtendimentoUseCase.execute({
      unidadeId: Number(unidadeId),
      ano: Number(ano),
      mes: Number(mes),
    });

    return response.json(atendimentos);
  }
}

export { ListAtendimentoController };
