import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllAtendimentoUseCase } from "./ListAllAtendimentoUseCase";

class ListAllAtendimentoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllAtendimentoUseCase = container.resolve(ListAllAtendimentoUseCase);

    const atendimentos = await listAllAtendimentoUseCase.execute();

    return response.json(atendimentos);
  }
}

export { ListAllAtendimentoController };