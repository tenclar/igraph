import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUnidadeUseCase } from "./CreateUnidadeUseCase";


class CreateUnidadeController {
  
  async handle(request: Request, response: Response): Promise <Response> {
    const { nome, data_inaugural } = request.body;

    const createUnidadeUseCase = container.resolve(CreateUnidadeUseCase);

    await createUnidadeUseCase.execute({ nome, data_inaugural });

    return response.status(201).send();
  }
}

export { CreateUnidadeController };
