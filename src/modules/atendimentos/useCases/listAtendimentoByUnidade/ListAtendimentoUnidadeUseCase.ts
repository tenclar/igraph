import { inject, injectable } from "tsyringe";
import { Atendimento } from "../../entities/Atendimento";
import { IAtendimentoRepository } from "../../repositories/IAtendimentoRepository";

interface IRequest {
  unidadeId: string;
}

@injectable()
class ListAtendimentoByUnidadeUseCase {
  constructor(
    @inject("AtendimentoRepository")
    private atendimentoRepository: IAtendimentoRepository
  ) {}

  async execute({ unidadeId }: IRequest): Promise<Atendimento[]> {
    const atendimentos = await this.atendimentoRepository.listByUnidade(unidadeId);

    return atendimentos;
  }
}

export { ListAtendimentoByUnidadeUseCase };
