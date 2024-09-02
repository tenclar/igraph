import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserUseCase } from "./authenticateUserUseCase";
import { AppError } from "../../../../errors/AppError";

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { password, nickname } = request.body;

    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);

    try {
      const token = await authenticateUserUseCase.execute({
        password,
        nickname,
      });

      return response.json(token);
    } catch (error) {
      if (error instanceof AppError) {
        return response.status(401).json({ message: error.message });
      }
      return response.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

export { AuthenticateUserController };
