import { inject, injectable } from "tsyringe";
import { IUnidadeRepository } from "../../repositories/IUnidadeRepository";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
  nome: string;
  data_inaugural: Date;
}

@injectable()
class CreateUnidadeUseCase {
  constructor(
    @inject("UnidadeRepository")
    private unidadeRepository: IUnidadeRepository
  ) {}

  async execute({ nome, data_inaugural }: IRequest): Promise<void> {
    const unidadeAlreadyExists = await this.unidadeRepository.findByName(nome);

    if (unidadeAlreadyExists) {
      throw new AppError("Unidade Ja existe");
    }

    await this.unidadeRepository.create({
      nome,
      data_inaugural,
    });
  }
}

export { CreateUnidadeUseCase };
