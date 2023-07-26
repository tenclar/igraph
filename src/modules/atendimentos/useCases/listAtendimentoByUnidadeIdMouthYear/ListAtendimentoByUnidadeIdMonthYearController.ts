import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAtendimentoByUnidadeIdMonthYearUseCase } from "./ListAtendimentoByUnidadeIdMonthYearUseCase";
      
class ListAtendimentoByUnidadeIdMonthYearController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { unidadeId, ano, mes } = request.params;

    const listAtendimentoUseCase = container.resolve(ListAtendimentoByUnidadeIdMonthYearUseCase);

    const atendimentos = await listAtendimentoUseCase.execute({
      unidadeId: Number(unidadeId),
      ano: Number(ano),
      mes: Number(mes),
    });

    return response.json(atendimentos);
  }
}

export { ListAtendimentoByUnidadeIdMonthYearController };
