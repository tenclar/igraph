import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateComentariosUseCase} from "./CreateComentariosUseCase";

class CreateComentariosController {
    async handle(request:Request, response: Response):Promise <Response> {
        const {comentarios} = request.body;

        const createComentariosUseCase = container.resolve(CreateComentariosUseCase);

        await createComentariosUseCase.execute({comentarios})

        return response.status(201).send()
    }
}

export {CreateComentariosController}