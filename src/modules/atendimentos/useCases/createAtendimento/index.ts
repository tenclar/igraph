import { AtendimentoRepository } from "../../repositories/implementations/AtendimentoRepository";
import { CreateAtendimentoController } from "./CreateAtendimentoController";
import { CreateAtendimentoUseCase } from "./CreateAtendimentoUseCase";

const atendimentoRepository = new AtendimentoRepository();
const createAtendimentoUseCase = new CreateAtendimentoUseCase(atendimentoRepository)
const createAtendimentoController = new CreateAtendimentoController();

export {createAtendimentoController}