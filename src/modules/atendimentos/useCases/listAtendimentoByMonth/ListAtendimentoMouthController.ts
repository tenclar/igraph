import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAtendimentoByMonthAndYearUseCase } from "./ListAtendimentoMouthUseCase";

class ListAtendimentoByMonthAndYearController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { mes, ano } = request.params;

    const listAtendimentoByYearUseCase = container.resolve(ListAtendimentoByMonthAndYearUseCase);

    const atendimentos = await listAtendimentoByYearUseCase.execute({ mes: Number(mes), ano: Number(ano) });

    return response.json(atendimentos);
  }
}

export { ListAtendimentoByMonthAndYearController };
