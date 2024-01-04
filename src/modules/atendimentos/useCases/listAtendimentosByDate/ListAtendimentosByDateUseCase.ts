import { inject, injectable } from "tsyringe";
import { IAtendimentoRepository } from "../../repositories/IAtendimentoRepository";
import { Atendimento } from "../../entities/Atendimento";

interface IRequest {
    dataInicio: Date;
    dataFim: Date;
}

@injectable()
class ListAtendimentosByDateUseCase {
    constructor(
        @inject('IAtendimentoRepository')
        private atendimentoRepository: IAtendimentoRepository
    ) {}

    async execute({ dataInicio, dataFim }: IRequest): Promise<Atendimento[]> {
        const atendimentos = await this.atendimentoRepository.listAtendimentoByDate(
            new Date(dataInicio),
            new Date(dataFim)
        );
        console.log("Atendimentos encontrados: ", atendimentos);
        return atendimentos;
    }
}

export {ListAtendimentosByDateUseCase}