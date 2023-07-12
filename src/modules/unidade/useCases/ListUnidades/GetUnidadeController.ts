import { Request, Response } from "express";
import { container } from "tsyringe";
import {GetUnidadesUseCase} from "./GetUnidadeUseCase";

class GetUnidadesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { nome } = request.params;

    const getUnidadesUseCase = container.resolve(GetUnidadesUseCase);

    const unidade = await getUnidadesUseCase.execute();

    if (unidade) {
      return response.json(unidade);
    } else {
      return response.status(404).json({ message: "Unidade não encontrada" });
    }
  }
}

export { GetUnidadesController };
