import { inject, injectable } from "tsyringe";
import { IAtendimentoRepository } from "../../repositories/IAtendimentoRepository";
import { Atendimento } from "../../entities/Atendimento";

interface IRequest {
    unidadeId: number;
    dataInicio: Date;
    dataFim: Date;
}

@injectable()
class ListAtendimentoByParamsUseCase {
    constructor(
        @inject('IAtendimentoRepository')
        private atendimentoRepository: IAtendimentoRepository
    ) {}

    async execute({ unidadeId, dataInicio, dataFim }: IRequest): Promise<Atendimento[]> {
        const atendimentos = await this.atendimentoRepository.listAtendimentoByParams(
            unidadeId,
            new Date(dataInicio),
            new Date(dataFim)
        );
        console.log("Atendimentos encontrados: ", atendimentos);
        return atendimentos;
    }
}

export { ListAtendimentoByParamsUseCase };
