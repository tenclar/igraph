/*import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserUseCase } from "./authenticateUserUseCase";
import { AppError } from "../../../../errors/AppError";

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { nickname, password } = request.body;

    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);

    try {
      const user = await authenticateUserUseCase.execute({
        nickname,
        password,
      });

      return response.json(user); // Retorna apenas os dados do usuário
    } catch (error) {
      if (error instanceof AppError) {
        return response.status(401).json({ message: error.message });
      }
      return response.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

export { AuthenticateUserController };
*/