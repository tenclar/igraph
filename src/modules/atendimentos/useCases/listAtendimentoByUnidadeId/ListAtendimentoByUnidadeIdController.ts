import { request, Request, Response } from "express";
import { container } from "tsyringe";
import { ListAtendimentoByUnidadeIdUseCase } from "./ListAtendimentoByUnidadeIdUseCase";

class ListAtendimentoByUnidadeIdController {
    async handle(request: Request, response:Response): Promise<Response> {
        const {unidadeId} = request.params;

        const listAtendimentoByUnidadeIdUseCase = container.resolve(ListAtendimentoByUnidadeIdUseCase);
        const atendimentos = await listAtendimentoByUnidadeIdUseCase.execute(Number(unidadeId));

        console.log('Atendimentos retornados pelo UseCase:', atendimentos); // Log para verificar o retorno

        return response.json(atendimentos);
    }
}

export {ListAtendimentoByUnidadeIdController}