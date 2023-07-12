import { inject, injectable } from "tsyringe";
import { IAtendimentoRepository } from "../../repositories/IAtendimentoRepository";
import { AppError } from "../../../../errors/AppError";
import { Atendimento } from "../../entities/Atendimento";

interface IRequest {
  unidadeId: number;
  ano: number;
  mes: number;
}

@injectable()
class ListAtendimentoUseCase {
  constructor(
    @inject("AtendimentoRepository")
    private atendimentoRepository: IAtendimentoRepository
  ) {}

  async execute({ unidadeId, ano, mes }: IRequest): Promise<Atendimento[]> {
    const atendimentos = await this.atendimentoRepository.listBySearch(unidadeId, ano, mes);

    if (!atendimentos) {
      throw new AppError("Atendimento não encontrado");
    }

    return atendimentos;
  }
}

export { ListAtendimentoUseCase };
