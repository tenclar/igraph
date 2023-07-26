import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { Atendimento } from "../../entities/Atendimento";
import { IAtendimentoRepository } from "../../repositories/IAtendimentoRepository";

interface IRequest {
  unidadeId: number;
  ano: number;
  mes: number;
}

@injectable()
class ListAtendimentoByUnidadeIdMonthYearUseCase {
  constructor(
    @inject("AtendimentoRepository")
    private atendimentoRepository: IAtendimentoRepository
  ) {}

  async execute({ unidadeId, ano, mes }: IRequest): Promise<Atendimento[]> {
    const atendimentos = await this.atendimentoRepository.listByUnidadeIdMonthYear(unidadeId, ano, mes);

    if (!atendimentos) {
      throw new AppError("Atendimento não encontrado");
    }

    return atendimentos;
  }
}

export { ListAtendimentoByUnidadeIdMonthYearUseCase };
