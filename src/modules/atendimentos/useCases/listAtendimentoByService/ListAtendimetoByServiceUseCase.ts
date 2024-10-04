import { inject, injectable } from "tsyringe";
import { Atendimento } from "../../entities/Atendimento";
import { IAtendimentoRepository } from "../../repositories/IAtendimentoRepository";

interface IRequest {
    service_id: number;
}

@injectable()
class ListAtendimentoByServiceUseCase {
    constructor(
        @inject("AtendimentoRepository")
        private atendimentoRepository: IAtendimentoRepository
    ) {}

    async execute({ service_id }: IRequest): Promise<Atendimento[]> {
        // Busca todos os atendimentos baseados no service_id
        const atendimentos = await this.atendimentoRepository.findByServiceId(service_id);
        return atendimentos;
    }
}

export { ListAtendimentoByServiceUseCase };
