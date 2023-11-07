import { IAtendimentoRepository } from "../../repositories/IAtendimentoRepository";
import { getRepository } from 'typeorm';

interface UpdateAtendimentoRequest {
  id: number;
  quantidade: number;
  comentario: string;
}

class UpdateAtendimentoUseCase {
  constructor(private atendimentoRepository: IAtendimentoRepository) {}

  async execute(data: UpdateAtendimentoRequest): Promise<void> {
    const { id, quantidade, comentario } = data;

    // Verifique se o atendimento com o ID fornecido existe
    const atendimento = await this.atendimentoRepository.findOne(id);

    if (!atendimento) {
      throw new Error('Atendimento não encontrado');
    }

    // Atualize os dados do atendimento
    atendimento.quantidade = quantidade;
    

    // Salve as alterações no banco de dados
    await this.atendimentoRepository.save(atendimento);
  }
}

export { UpdateAtendimentoUseCase };
