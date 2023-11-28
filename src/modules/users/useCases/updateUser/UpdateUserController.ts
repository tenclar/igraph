import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../../entities/User";

class UpdateUserController {

    async handle(req: Request, res: Response) {
        try {
            const userId = req.params.id;
            const {nome, nivel, status, nickname, password} = req.body;

            const usersRepository = getRepository(User);

            const usuario = await usersRepository.findOne(userId);

            if(!usuario) {
                return res.status(404).json({error: "Usuario não encontradao"});
            }

            usuario.nome = nome
            usuario.nivel = nivel
            usuario.status = status
            usuario.nickname = nickname
            usuario.password = password

            await usersRepository.save(usuario);
            return res.status(200).json({message: "Usuario atualizado com sucesso"});
        } catch(error) {
            console.error(error);
            return res.status(500).json({error: "Erro ao atualizar o atendimento"})
        }
    }
}

export {UpdateUserController}