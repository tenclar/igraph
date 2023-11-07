import { Router } from "express";
import { CreateAtendimentoController } from "../modules/atendimentos/useCases/createAtendimento/CreateAtendimentoController";
import { ListAllAtendimentoController } from "../modules/atendimentos/useCases/listAll/ListAllAtendimentoController";
import { ListAtendimentoByMonthAndYearController } from "../modules/atendimentos/useCases/listAtendimentoByMonth/ListAtendimentoMouthController";
import { ListAtendimentoByUnidadeIdMonthYearController } from "../modules/atendimentos/useCases/listAtendimentoByUnidadeIdMouthYear/ListAtendimentoByUnidadeIdMonthYearController";
import { ListAtendimentoByYearController } from "../modules/atendimentos/useCases/listAtendimentoYear/ListAtendimentoYearController";
import { UpdateAtendimentoController } from "../modules/atendimentos/useCases/updateAtendimento/UpdateAtendimentoController";

const atendimentoRoutes = Router();

const createAtendimentoController = new CreateAtendimentoController()
const listAtendimentoByUnidadeIdMonthYearController = new ListAtendimentoByUnidadeIdMonthYearController()
const listAllAtendimentoController =  new ListAllAtendimentoController()
const listAtendimentoByYearController = new ListAtendimentoByYearController()
const listAtendimentoByMouthAndYear = new ListAtendimentoByMonthAndYearController()
const updateAtendimentoController = new UpdateAtendimentoController()

atendimentoRoutes.post("/", createAtendimentoController.handle);
atendimentoRoutes.put("/:id", updateAtendimentoController.handle);

atendimentoRoutes.get("/", listAllAtendimentoController.handle)

atendimentoRoutes.get("/:ano", listAtendimentoByYearController.handle)

atendimentoRoutes.get("/:mes/:ano", listAtendimentoByMouthAndYear.handle)

atendimentoRoutes.get("/:unidadeId/:ano/:mes", listAtendimentoByUnidadeIdMonthYearController.handle)





export { atendimentoRoutes };
