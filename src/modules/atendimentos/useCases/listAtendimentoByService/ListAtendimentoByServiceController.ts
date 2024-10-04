import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAtendimentoByServiceUseCase } from "./ListAtendimetoByServiceUseCase";

class ListAtendimentoByServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { servicoId } = request.params;

        // Validação do parâmetro de entrada
        if (!servicoId || isNaN(Number(servicoId))) {
            return response.status(400).json({ error: 'ID do serviço inválido' });
        }

        const listAtendimentoByServiceUseCase = container.resolve(ListAtendimentoByServiceUseCase);

        try {
            // Chama o caso de uso para listar os atendimentos com base no service_id
            const atendimentos = await listAtendimentoByServiceUseCase.execute({
                service_id: Number(servicoId),
            });

            // Verifica se há atendimentos encontrados
            if (atendimentos && atendimentos.length > 0) {
                return response.json(atendimentos); // Retorna a lista de atendimentos encontrados
            } else {
                return response.status(404).json({ message: 'Nenhum atendimento encontrado para este serviço.' });
            }
        } catch (error) {
            // Captura e trata erros
            console.error(error);
            return response.status(500).json({ error: 'Erro ao buscar atendimentos.' });
        }
    }
}

export { ListAtendimentoByServiceController };
