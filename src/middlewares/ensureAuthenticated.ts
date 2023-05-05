import { NextFunction, Request, Response } from "express";
import { decode, verify } from "jsonwebtoken";
import { UsersRepository } from "../modules/users/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../modules/users/repositories/IUsersRepository";
import { AppError } from "../errors/AppError";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing", 401)
  }

  const [ , token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      "f24982c4a1a705dc697d36b8098cfa8c"
    ) as IPayload;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(Number(user_id));

    if(!user) {
        throw new AppError("Usuario Ja Existe", 401)
    }

    next();
  } catch {
    throw new AppError("Invalid token!", 401);
  }
}
