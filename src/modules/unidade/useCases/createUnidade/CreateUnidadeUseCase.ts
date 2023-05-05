import { inject, injectable } from "tsyringe";
import { IUnidadeRepository } from "../../repositories/IUnidadeRepository";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
  nome: string;
  data_inaugural: Date;
}

//Repositorio da tabela de unidades OCA
@injectable()
class CreateUnidadeUseCase {
  constructor(
    @inject("UnidadeRepository")
    private unitRepository: IUnidadeRepository) {}
  async execute({nome, data_inaugural}: IRequest): Promise<void> {
    const unidadeAlreadyExists = await this.unitRepository.findByName(nome);
    

    if (unidadeAlreadyExists) {
      throw new AppError("Unidade Ja existe");
    
  }
    await this.unitRepository.create({
      nome,
      data_inaugural
    });
  }
}

export { CreateUnidadeUseCase };
