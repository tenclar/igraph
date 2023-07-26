import { Router } from "express";
import { CreateAtendimentoController } from "../modules/atendimentos/useCases/createAtendimento/CreateAtendimentoController";
import { ListAllAtendimentoController } from "../modules/atendimentos/useCases/listAll/ListAllAtendimentoController";
import { ListAtendimentoByMonthAndYearController } from "../modules/atendimentos/useCases/listAtendimentoByMonth/ListAtendimentoMouthController";
import { ListAtendimentoByUnidadeIdMonthYearController } from "../modules/atendimentos/useCases/listAtendimentoByUnidadeIdMouthYear/ListAtendimentoByUnidadeIdMonthYearController";
import { ListAtendimentoByYearController } from "../modules/atendimentos/useCases/listAtendimentoYear/ListAtendimentoYearController";

const atendimentoRoutes = Router();

const createAtendimentoController = new CreateAtendimentoController()
const listAtendimentoByUnidadeIdMonthYearController = new ListAtendimentoByUnidadeIdMonthYearController()
const listAllAtendimentoController =  new ListAllAtendimentoController()
const listAtendimentoByYearController = new ListAtendimentoByYearController()
const listAtendimentoByMouthAndYear = new ListAtendimentoByMonthAndYearController()

atendimentoRoutes.post("/", createAtendimentoController.handle);
atendimentoRoutes.get("/", listAllAtendimentoController.handle)

atendimentoRoutes.get("/:ano", listAtendimentoByYearController.handle)

atendimentoRoutes.get("/:mes/:ano", listAtendimentoByMouthAndYear.handle)

atendimentoRoutes.get("/:unidadeId/:ano/:mes", listAtendimentoByUnidadeIdMonthYearController.handle)





export { atendimentoRoutes };
