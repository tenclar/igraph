import { inject, injectable } from "tsyringe";
import { Unidades } from "../../entities/Unidades";
import { IUnidadeRepository } from "../../repositories/IUnidadeRepository";

@injectable()
class GetUnidadesUseCase {
  constructor(
    @inject("UnidadeRepository")
    private unidadeRepository: IUnidadeRepository
  ) {}

  async execute(): Promise<Unidades[]> {
    const unidades = await this.unidadeRepository.list();
    return unidades;
  }
}

export { GetUnidadesUseCase };
