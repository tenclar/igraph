import { Router, Request, Response } from "express";
import bcrypt from "bcrypt";
import { getRepository } from "typeorm";
import { User } from "../modules/users/entities/User"; // Ajuste o caminho da entidade

const authenticateRoutes = Router();

authenticateRoutes.post("/auth", async (req: Request, res: Response) => {
  const { nickname, password } = req.body;

  try {
    console.log('nickname:', nickname);
    console.log('password:', password);

    const userRepository = getRepository(User);

    // Buscar o usuário pelo nickname
    const user = await userRepository.findOne({
      where: { nickname },
    });

    if (!user) {
      console.log('Usuário não encontrado');
      return res.status(404).json({ message: "Usuário não encontrado." });
    }

    console.log('Senha do usuário:', user.password);

    if (!user.password) {
      return res.status(500).json({ message: "Senha não encontrada no banco de dados." });
    }

    // Verifique se os tipos estão corretos
    if (typeof password !== 'string' || typeof user.password !== 'string') {
      return res.status(400).json({ message: "Dados inválidos. Senha incorreta." });
    }

    // Verifique a senha utilizando bcrypt
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Nickname ou senha incorretos." });
    }

    // Verifique o status do usuário
    if (user.status !== false) {
      return res.status(403).json({ message: "Usuário inativo." });
    }

    // Retornar uma mensagem de sucesso
    return res.json({
      message: "Usuário autorizado! Bem-vindo!",
      user: {
        id: user.id,
        nickname: user.nickname,
        email: user.email,
        nivel: user.nivel,
        status: user.status,
      },
    });
  } catch (error) {
    console.error("Erro no login:", error);
    return res
      .status(500)
      .json({ message: "Erro no servidor. Tente novamente mais tarde." });
  }
});

export { authenticateRoutes };
