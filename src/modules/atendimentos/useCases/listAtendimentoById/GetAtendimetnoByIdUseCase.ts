import { inject, injectable } from "tsyringe";
import { IAtendimentoRepository } from "../../repositories/IAtendimentoRepository";
import { Atendimento } from "../../entities/Atendimento";

interface IRequest {
  id: number;
}

@injectable()
class GetAtendimentoByIdUseCase {
  constructor(
    @inject("AtendimentoRepository")
    private atendimentoRepository: IAtendimentoRepository
  ) {}

  async execute({ id }: IRequest): Promise<any | null> {
    // Verifica se o atendimento com o ID fornecido existe no banco de dados
    const atendimento = await this.atendimentoRepository.findOne(id);

    // Se o atendimento não for encontrado, retorna null
    if (!atendimento) {
      return null;
    }

    // Retorna o atendimento no formato desejado
    return {
      id: atendimento.id,
      data_de_atendimento: atendimento.data_de_atendimento,
      quantidade: atendimento.quantidade,
      unidade_name: atendimento.unidade?.nome || "",  // Nome da unidade
      servico_name: atendimento.servico?.nome || "",  // Nome do serviço
      usuario_name: atendimento.usuario?.nome || "",  // Nome do usuário
      comentarios: atendimento.comentarios.map(comentario => ({
        id: comentario.id,
        comentarios: comentario.comentarios,
        created_at: comentario.created_at,
        updated_at: comentario.updated_at,
      })),
      created_at: atendimento.created_at,
      updated_at: atendimento.updated_at,
    };
  }
}

export { GetAtendimentoByIdUseCase };
