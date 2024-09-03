import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAtendimentoByUnidadeUseCase } from "./ListAtendimentoUnidadeUseCase"

class ListAtendimentoByUnidadeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    // Verifica se o ID é válido
    if (!id || isNaN(Number(id))) {
      return response.status(400).json({ error: 'ID inválido ou não fornecido' });
    }

    const listAtendimentoByUnidadeUseCase = container.resolve(ListAtendimentoByUnidadeUseCase);

    try {
      const atendimentos = await listAtendimentoByUnidadeUseCase.execute({ unidades_id: String(id) });

      // Se nenhum atendimento for encontrado, retorna uma mensagem informando isso
      if (atendimentos.length === 0) {
        return response.status(404).json({ message: 'Nenhum atendimento encontrado para esta unidade' });
      }

      return response.json(atendimentos);
    } catch (error) {
      console.error('Erro ao buscar atendimentos:', error);
      return response.status(500).json({ status: 'error', message: `Internal server error - ` });
    }
  }
}

export { ListAtendimentoByUnidadeController };
