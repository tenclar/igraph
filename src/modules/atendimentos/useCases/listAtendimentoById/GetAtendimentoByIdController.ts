import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAtendimentoByIdUseCase } from "./GetAtendimetnoByIdUseCase"; 

class GetAtendimentoByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    // Verifica se o ID é válido
    if (!id || isNaN(Number(id))) {
      return response.status(400).json({ error: 'ID inválido' });
    }

    const getAtendimentoByIdUseCase = container.resolve(GetAtendimentoByIdUseCase);

    try {
      const atendimento = await getAtendimentoByIdUseCase.execute({ id: Number(id) });

      // Se nenhum atendimento for encontrado, retorna uma mensagem informando isso
      if (!atendimento) {
        return response.status(404).json({ message: 'Atendimento não encontrado' });
      }

      // Retorna o atendimento encontrado
      return response.json(atendimento);
    } catch (error) {
      console.error('Erro ao buscar atendimento:', error);
      return response.status(500).json({ status: 'error', message: `Internal server error` });
    }
  }
}

export { GetAtendimentoByIdController };
