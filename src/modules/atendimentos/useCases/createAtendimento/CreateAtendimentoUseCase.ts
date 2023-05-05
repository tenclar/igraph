import { inject, injectable } from "tsyringe";
import { IAtendimentoRepository } from "../../repositories/IAtendimentoRepository";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
  quantidade: number;
  data_de_Atendimento: Date;
  comentarios: string;
  usuarios_id: number;
  servicos_id: number;
  unidades_id: number;
}

@injectable()
class CreateAtendimentoUseCase {
  constructor(
    @inject("AtendimentoRepository")
    private atendimentoRepository: IAtendimentoRepository
  ) {}

  async execute({ quantidade, data_de_Atendimento, comentarios, usuarios_id, servicos_id, unidades_id }: IRequest): Promise<void> {
    const atendimentoAlreadyExist = await this.atendimentoRepository.findOne(comentarios);

    if (atendimentoAlreadyExist) {
      throw new AppError("Atendimento já existe");
    }

    const atendimento = {
      quantidade,
      data_de_Atendimento,
      comentarios,
      usuarios_id,
      unidades_id,
      servicos_id
    };

    await this.atendimentoRepository.create(atendimento);
  }
}

export { CreateAtendimentoUseCase };
