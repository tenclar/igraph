import { IServicosRepository } from "../../repositories/IServicosRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteServicoUseCase {
    constructor(
        @inject("ServicoRepository")
        private servicoRepository: IServicosRepository
    ) {}

    async execute(id: number): Promise<void> {
        const servico = await this.servicoRepository.findById(id);

        if(!servico) {
            throw new Error("Serviço não encontrado");
        }

        await this.servicoRepository.delete(servico)
    }
}

export {DeleteServicoUseCase}