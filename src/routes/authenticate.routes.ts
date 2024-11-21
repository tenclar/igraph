import { Router, Request, Response } from "express";
import bycrip from "bcrypt";
import { User } from "../modules/users/entities/User";

const authenticateRoutes = Router();

// Resposta mockada para testes
authenticateRoutes.post("/auth", (req: Request, res: Response) => {
  const { nickname, password } = req.body;

  // Simule uma verificação simples
  if (nickname === "testUser" && password === "testPass") {
    return res.json({ message: "Usuário autorizado! Bem-vindo!" });
  }

  return res.status(401).json({ message: "Nickname ou senha incorretos" });
});

export { authenticateRoutes };
