import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListRelatorioUseCase } from "./ListRelatorioUseCase";

class ListRelatorioController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { mes, ano, unidade_id } = request.query;

    const listRelatorioUseCase = container.resolve(ListRelatorioUseCase);

    const relatorio = await listRelatorioUseCase.execute({
      mes: mes ? Number(mes) : undefined,
      ano: ano ? Number(ano) : undefined,
      unidade_id: unidade_id ? Number(unidade_id) : undefined,
    });

    return response.json(relatorio);
  }

  async handleByUnidade(request: Request, response: Response): Promise<Response> {
    const { unidade_id } = request.params;

    const listRelatorioUseCase = container.resolve(ListRelatorioUseCase);

    const relatorio = await listRelatorioUseCase.execute({
      unidade_id: Number(unidade_id),
    });

    return response.json(relatorio);
  }

  async handleByServico(request: Request, response: Response): Promise<Response> {
    const { servico_id } = request.params;
    const listRelatorioUseCase = container.resolve(ListRelatorioUseCase);

    const relatorio = await listRelatorioUseCase.execute({ servico_id: Number(servico_id) });
    return response.json(relatorio);
  }

}

export { ListRelatorioController };
