import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateAtendimentoUseCase } from "./CreateAtendimentoUseCase";

class CreateAtendimentoController {
    
    async handle(request: Request, response: Response): Promise <Response> {
        const {comentarios , quantidade, data_de_atendimento, unidades_id, servicos_id, usuarios_id} = request.body;
            
        const createAtendimentoUseCase = container.resolve(CreateAtendimentoUseCase);

        await createAtendimentoUseCase.execute({comentarios, quantidade, data_de_atendimento,unidades_id, servicos_id, usuarios_id });

        return response.status(201).send()
    }
}
export { CreateAtendimentoController };


