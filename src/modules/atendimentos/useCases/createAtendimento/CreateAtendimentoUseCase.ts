import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IAtendimentoRepository } from "../../repositories/IAtendimentoRepository";
import { Atendimento } from "../../entities/Atendimento";

interface IRequest {
  quantidade: number;
  data_de_atendimento: Date;
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

  async execute({ quantidade, data_de_atendimento, comentarios, usuarios_id, servicos_id, unidades_id }: IRequest): Promise<Atendimento> {
    const atendimentoAlreadyExist = await this.atendimentoRepository.findByDateAndUnidade(data_de_atendimento, unidades_id);

    if (atendimentoAlreadyExist) {
      throw new AppError("Atendimento já existe");
    }

    const novoAtendimento = {
      quantidade,
      data_de_atendimento,
      comentarios,
      usuarios_id,
      unidades_id,
      servicos_id
    };

    const atendimento = await this.atendimentoRepository.create(novoAtendimento);
    return atendimento
  }
}

export { CreateAtendimentoUseCase };
