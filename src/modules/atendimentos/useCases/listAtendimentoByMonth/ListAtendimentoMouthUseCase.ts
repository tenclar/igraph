import { inject, injectable } from "tsyringe";
import { IAtendimentoRepository } from "../../repositories/IAtendimentoRepository";
import { Atendimento } from "../../entities/Atendimento";

interface IRequest {
  mes: number;
  ano: number;
}

@injectable()
class ListAtendimentoByMonthAndYearUseCase {
  constructor(
    @inject("AtendimentoRepository")
    private atendimentoRepository: IAtendimentoRepository
  ) {}

  async execute({ mes, ano }: IRequest): Promise<Atendimento[]> {
    const atendimentos = await this.atendimentoRepository.listByMonthAndYear(mes, ano);

    return atendimentos;
  }
}

export { ListAtendimentoByMonthAndYearUseCase };
