import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAuditoriaUseCase } from "./ListAuditoriaUseCase";

class ListAuditoriaController {
    async handle(request: Request, response:Response): Promise<Response>{
        const listAuditoriaUseCase = container.resolve(ListAuditoriaUseCase);

        const all = await listAuditoriaUseCase.execute();

        return response.json(all);

    }
}

export {ListAuditoriaController}

