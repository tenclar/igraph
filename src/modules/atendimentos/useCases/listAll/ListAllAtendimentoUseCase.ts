import { inject, injectable } from "tsyringe";
import { IAtendimentoRepository } from "../../repositories/IAtendimentoRepository";
import { Atendimento } from "../../entities/Atendimento";

@injectable()
class ListAllAtendimentoUseCase {
  constructor(
    @inject("AtendimentoRepository")
    private atendimentoRepository: IAtendimentoRepository
  ) {}

  async execute(): Promise<Atendimento[]> {
    const atendimentos = await this.atendimentoRepository.listAll();

    return atendimentos;
  }
}

export { ListAllAtendimentoUseCase };
