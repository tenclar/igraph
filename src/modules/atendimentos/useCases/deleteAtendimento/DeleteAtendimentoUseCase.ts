import { IAtendimentoRepository } from "../../repositories/IAtendimentoRepository";
import { inject, injectable } from "tsyringe";


@injectable()
class DeleteAtendimentoUseCase {
  constructor(
    @inject("AtendimentoRepository")
    private atendimentoRepository: IAtendimentoRepository
  ) {}

  async execute(id: number): Promise<void> {
    const atendimento = await this.atendimentoRepository.findOne(id);

    if (!atendimento) {
      throw new Error("Atendimento não encontrado");
    }

    await this.atendimentoRepository.deleteRelatedComentarios(atendimento);

    // Realize a exclusão do atendimento
    await this.atendimentoRepository.delete(atendimento);
  }
}

export { DeleteAtendimentoUseCase };