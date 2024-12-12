import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../../entities/User";

class UpdateUserController {
    async handle(req: Request, res: Response) {
        try {
            const userId = parseInt(req.params.id, 10);
            if (isNaN(userId)) {
                return res.status(400).json({ error: "ID inválido" });
            }

            const { nome, nivel, status, nickname, password } = req.body;
            const usersRepository = getRepository(User);

            // Passar condição no objeto where
            const usuario = await usersRepository.findOne({
                where: { id: userId },
            });

            if (!usuario) {
                return res.status(404).json({ error: "Usuário não encontrado" });
            }

            usuario.nome = nome;
            usuario.nivel = nivel;
            usuario.status = status;
            usuario.nickname = nickname;
            usuario.password = password;

            await usersRepository.save(usuario);
            return res.status(200).json({ message: "Usuário atualizado com sucesso" });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Erro ao atualizar o usuário" });
        }
    }
}

export { UpdateUserController };
