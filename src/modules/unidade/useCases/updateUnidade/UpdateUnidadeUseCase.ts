import { IUnidadeRepository } from "../../repositories/IUnidadeRepository";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
  id: number;
  nome: string;
  data_inaugural: Date;
}

class UpdateUnidadeUseCase {
  constructor(private unidadeRepository: IUnidadeRepository) {}
  async execute(data: IRequest): Promise<void> {
    const { id, nome, data_inaugural } = data;

    const unidade = await this.unidadeRepository.findById(id);

    if (!unidade) {
      throw new AppError("Unidade não encontrada");
    }
    unidade.nome = nome;
    unidade.data_inaugural = data_inaugural;
    await this.unidadeRepository.save(unidade);
  }
}

export { UpdateUnidadeUseCase };
