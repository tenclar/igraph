import { inject, injectable } from "tsyringe";
import { IAtendimentoRepository } from "../../repositories/IAtendimentoRepository";
import { Atendimento } from "../../entities/Atendimento";

@injectable()
class ListAtendimentoByUnidadeIdUseCase {
  constructor(
    @inject("AtendimentoRepository")
    private atendimentoRepository: IAtendimentoRepository
  ) {}

  async execute(unidadeId: number): Promise<Atendimento[]> {
    const atendimentos = await this.atendimentoRepository.listByUnidade(unidadeId);

    console.log('Atendimentos retornados pelo UseCase:', atendimentos); // Log para verificar o retorno

    return atendimentos;
  }
}

export {ListAtendimentoByUnidadeIdUseCase}