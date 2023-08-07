import { ComentariosRepository } from "../../repositories/implementations/ComentariosRepository";
import { CreateComentariosController } from "./CreateComentariosController";
import { CreateComentariosUseCase } from "./CreateComentariosUseCase";

const comentariosRepository = new ComentariosRepository();
const createComentariosUseCase = new CreateComentariosUseCase(comentariosRepository);
const createComentariosController = new CreateComentariosController();

export {createComentariosController}


