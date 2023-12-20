import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListAtendimentoByParamsUseCase } from './ListAtendimentoByParamsUseCase';

class ListAtendimentoByParamsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { unidadeId, dataInicio, dataFim } = req.params;

    const unidadeIdParam = unidadeId as string;
    const dataInicioParam = dataInicio as string;
    const dataFimParam = dataFim as string;

    if (!unidadeIdParam || !dataInicioParam || !dataFimParam) {
      return res.status(400).json({
        status: 'error',
        message: 'Parâmetros inválidos',
      });
    }

    const listAtendimentoByParamsUseCase = container.resolve(ListAtendimentoByParamsUseCase);

    // Faça a chamada ao caso de uso
    const atendimentos = await listAtendimentoByParamsUseCase.execute({
      unidadeId: parseInt(unidadeIdParam),
      dataInicio: new Date(dataInicioParam),
      dataFim: new Date(dataFimParam),
    });

    // Formate os dados conforme necessário
    console.log('Query Params:', { unidadeId, dataInicio, dataFim });
    const atendimentosData = atendimentos.map((atendimento: any) => ({
      data_atendimento : atendimento.data_de_atendimento,
      
      unidade: atendimento.unidades_id || "", // Ajuste conforme necessário
    }));

    return res.json(atendimentosData);
  }
}

export { ListAtendimentoByParamsController };
