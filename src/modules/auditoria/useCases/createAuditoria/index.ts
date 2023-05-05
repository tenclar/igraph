import { AuditoriaRepository } from "../../repositories/implementations/AuditoriaRepository";
import { CreateAuditoriaController } from "./CreateAuditoriaController";
import { CreateAuditoriaUseCase } from "./CreateAuditoriaUseCase";

const auditoriaRepository = new AuditoriaRepository();
const createAuditoriaUseCase = new CreateAuditoriaUseCase(auditoriaRepository)
const createAuditoriaControler = new CreateAuditoriaController();

export {createAuditoriaControler}