import { inject, injectable } from "tsyringe";
import { Atendimento } from "../../entities/Atendimento";
import { IAtendimentoRepository } from "../../repositories/IAtendimentoRepository";

// Defina a interface IRequest aqui no topo do arquivo
interface IRequest {
  mes?: number;
  ano?: number;
  unidade_id?: number;
  servico_id?: number;
  usuario_id?: number;
}

@injectable()
class ListRelatorioUseCase {
  constructor(
    @inject("AtendimentoRepository")
    private atendimentoRepository: IAtendimentoRepository
  ) {}

  async execute(filters: IRequest): Promise<Atendimento[]> {
    // Chama o repositório passando os filtros
    const atendimentos = await this.atendimentoRepository.listWithFilters(filters);
    
    return atendimentos;
  }
}

export { ListRelatorioUseCase };
