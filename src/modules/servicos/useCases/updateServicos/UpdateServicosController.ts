import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Servicos} from "../../entities/Servicos";

class UpdateServicosController {
    async handle(req: Request, res: Response){
        try {
            const servicoId = req.params.id;
            const {nome} = req.body;

            const servicosRepository = getRepository(Servicos);

            const servico = await servicosRepository.findOne(servicoId);

            if(!servico) {
                return res.status(404).json({error: "Servico não encontrado"});
            }

            servico.nome = nome

            await servicosRepository.save(servico);
            return res.status(200).json({message:"Servico Atualizado com Sucesso"})
        } catch(error) {
            console.error(error);
            return res.status(200).json({message: "Servico atualizado com sucesso"})
       }
    }
}

export {UpdateServicosController}