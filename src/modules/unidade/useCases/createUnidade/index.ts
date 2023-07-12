import { UnidadeRepository } from "../../repositories/implementations/UnidadeRepository";
import { CreateUnidadeController } from "./CreateUnidadeController";
import { CreateUnidadeUseCase } from "./CreateUnidadeUseCase";

//olhar unideade controller
const unidadeRepository = new UnidadeRepository();
const createUnidadeUseCase = new CreateUnidadeUseCase(unidadeRepository);
const createUnidadeController = new CreateUnidadeController();

export { createUnidadeController };
