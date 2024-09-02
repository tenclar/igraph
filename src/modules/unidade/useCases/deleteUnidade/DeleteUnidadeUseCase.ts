import { IUnidadeRepository } from "../../repositories/IUnidadeRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteUnidadeUseCase {
    constructor(
        @inject("UnidadeRepository")
        private unidadeRepository: IUnidadeRepository
    ) {}

    async execute(id: number): Promise<void> {
        const unidade = await this.unidadeRepository.findById(id);

        if(!unidade) {
            throw new Error("Unidade não encontrada");
        }

        await this.unidadeRepository.delete(unidade)
    }
}

export {DeleteUnidadeUseCase}