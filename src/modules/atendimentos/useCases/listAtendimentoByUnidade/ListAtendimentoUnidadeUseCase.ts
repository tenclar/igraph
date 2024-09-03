import { inject, injectable } from "tsyringe";
import { Atendimento } from "../../entities/Atendimento";
import { IAtendimentoRepository } from "../../repositories/IAtendimentoRepository";

interface IRequest {
  unidades_id: string;
}

@injectable()
class ListAtendimentoByUnidadeUseCase {
  constructor(
    @inject("AtendimentoRepository")
    private atendimentoRepository: IAtendimentoRepository
  ) {}

  async execute({ unidades_id }: IRequest): Promise<any[]> {
    console.log(`Buscando atendimentos para unidade: ${unidades_id}`); // Adicione um log

    const atendimentos = await this.atendimentoRepository.listByUnidade(unidades_id);

    console.log(`Atendimentos encontrados: ${JSON.stringify(atendimentos)}`); // Adicione um log

    return atendimentos.map(atendimento => ({
      id: atendimento.id,
      data_de_atendimento: atendimento.data_de_atendimento,
      quantidade: atendimento.quantidade,
      unidade_name: atendimento.unidade?.nome || "",
      servico_name: atendimento.servico?.nome || "",
      usuario_name: atendimento.usuario?.nome || "",
      comentarios: atendimento.comentarios.map(comentario => ({
        id: comentario.id,
        comentario: comentario.comentarios,
        created_at: comentario.created_at,
        updated_at: comentario.updated_at,
      })),
      created_at: atendimento.created_at,
      updated_at: atendimento.updated_at,
    }));
  }
}


export { ListAtendimentoByUnidadeUseCase };
