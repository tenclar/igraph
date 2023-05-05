import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateAuditoriaUseCase} from "./CreateAuditoriaUseCase";

class CreateAuditoriaController {
    async handle(request:Request, response: Response):Promise <Response> {
        const {ip, acessoHoraData, usuario_id, tipo_acao, nome_tabela, id_tabela} = request.body;

        const createAuditoriaUseCase = container.resolve(CreateAuditoriaUseCase);

        await createAuditoriaUseCase.execute({ip, acessoHoraData, usuario_id, tipo_acao, nome_tabela, id_tabela})

        return response.status(201).send()
    }
}

export {CreateAuditoriaController}