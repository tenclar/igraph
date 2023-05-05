import { Request, Response } from "express";
import { container } from "tsyringe"
import { CreateUserUseCase } from "./CreateUserUseCase";

/* o controller faz a função de realizar a criação e o controler dos usuarios criados
O mesmo passa para o CreateUserUseCase que esta na mesma pasta para o mesmo fazer a tratativa se o usuario ja existe*/
class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, nickname, nivel, password, email, status } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase)

    await createUserUseCase.execute({
      nome,
      nickname,
      nivel,
      password,
      email,
      status,
    });

    return response.status(201).send();
  }
}
export { CreateUserController};
