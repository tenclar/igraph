import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListAtendimentosByDateUseCase } from './ListAtendimentosByDateUseCase';

class ListAtendimentosByDateController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { unidadeId, dataInicio, dataFim } = req.params;

    const dataInicioParam = dataInicio as string;
    const dataFimParam = dataFim as string;

    if (!dataInicioParam || !dataFimParam) {
      return res.status(400).json({
        status: 'error',
        message: 'Parâmetros inválidos',
      });
    }

    const listAtendimentosByDateUseCase = container.resolve(ListAtendimentosByDateUseCase);

    // Faça a chamada ao caso de uso
    const atendimentos = await listAtendimentosByDateUseCase.execute({
      dataInicio: new Date(dataInicioParam),
      dataFim: new Date(dataFimParam),
    });

    // Formate os dados conforme necessário
    console.log('Query Params:', { unidadeId, dataInicio, dataFim });
    const atendimentosData = atendimentos.map((atendimento: any) => ({
      data_atendimento : atendimento.data_de_atendimento,
      unidade: atendimento.unidades_id || "", // Ajuste conforme necessário
      quantidade: atendimento.quantidade,
      usuario: atendimento.usuarios_id
    }));

    return res.json(atendimentosData);
  }
}

export { ListAtendimentosByDateController };
