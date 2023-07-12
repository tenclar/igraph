import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAtendimentoByYearUseCase } from "./ListAtendimentoYearUseCase";

class ListAtendimentoByYearController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { ano } = request.params;

    const listAtendimentoByYearUseCase = container.resolve(ListAtendimentoByYearUseCase);

    const atendimentos = await listAtendimentoByYearUseCase.execute(Number(ano));

    return response.json(atendimentos);
  }
}

export { ListAtendimentoByYearController };
