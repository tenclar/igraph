import { inject, injectable } from "tsyringe";
import { IAtendimentoRepository } from "../../repositories/IAtendimentoRepository";
import { Atendimento } from "../../entities/Atendimento";

@injectable()
class ListAtendimentoByYearUseCase {
  constructor(
    @inject("AtendimentoRepository")
    private atendimentoRepository: IAtendimentoRepository
  ) {}

  async execute(ano: number): Promise<Atendimento[]> {
    const atendimentos = await this.atendimentoRepository.listByYear(ano);

    return atendimentos;
  }
}

export { ListAtendimentoByYearUseCase };
