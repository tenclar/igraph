import { inject, injectable } from "tsyringe";
import { Servicos } from "../../../entities/Servicos";
import { IServicosRepository } from "../../../repositories/IServicosRepository";

@injectable()
class GetServicosUseCase {
    constructor(
        @inject("ServicoRepository")
        private servicoRepository: IServicosRepository 
    ) {}

    async execute(): Promise<Servicos[]> {
        const servicos = await this.servicoRepository.list()
        return servicos
    }
}

export {GetServicosUseCase}