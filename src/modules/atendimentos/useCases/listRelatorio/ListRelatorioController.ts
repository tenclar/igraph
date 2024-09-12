import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListRelatorioUseCase } from "./ListRelatorioUseCase";

class ListRelatorioController {
  handle(arg0: string, handle: any) {
      throw new Error("Method not implemented.");
  }
  async handleByMesAnoUnidade(request: Request, response: Response): Promise<Response> {
    // Extraindo os parâmetros mes, ano e unidade_id da URL
    const { mes, ano, unidade_id } = request.params;

    // Resolvendo o caso de uso ListRelatorioUseCase usando o container do tsyringe
    const listRelatorioUseCase = container.resolve(ListRelatorioUseCase);

    // Executando o caso de uso com os parâmetros passados
    const relatorio = await listRelatorioUseCase.execute({
      mes: Number(mes),
      ano: Number(ano),
      unidade_id: Number(unidade_id),
    });

    // Retornando a resposta JSON com o relatório
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
