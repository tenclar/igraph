import { IAuditoriaRepository } from "../../repositories/IAuditoriaRepository"
import { Auditoria } from "../../entities/Auditoria"
import {inject , injectable} from "tsyringe"

@injectable()
class ListAuditoriaUseCase {
    constructor(
        @inject("AuditoriaRepository")
        private auditoriaRepository: IAuditoriaRepository){}

    async execute(): Promise<Auditoria[]> {
        const auditoria = await this.auditoriaRepository.list()

        return auditoria;
    }
}

export {ListAuditoriaUseCase}
