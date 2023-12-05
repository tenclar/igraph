import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateServicoUseCase } from "./CreateServicosUseCase";


class CreateServicoController {

    async handle(request: Request, response: Response): Promise <Response> {
        const {nome} = request.body;

        const createServicosUseCase = container.resolve(CreateServicoUseCase);

        await createServicosUseCase.execute({nome});

        return response.status(201).send();
    }
}

export { CreateServicoController }