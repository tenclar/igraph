import { request, response, Router } from "express";
import { CreateAtendimentoController } from "../modules/atendimentos/useCases/createAtendimento/CreateAtendimentoController";
import { ListAtendimentoController} from "../modules/atendimentos/useCases/listAtendimentoByIdMouthYear/ListBySearchAtendimentoControler";
import { ListAllAtendimentoController } from "../modules/atendimentos/useCases/listAll/ListAllAtendimentoController";
import { ListAtendimentoByYearController } from "../modules/atendimentos/useCases/listAtendimentoYear/ListAtendimentoYearController";
import { ListAtendimentoByMonthAndYearController } from "../modules/atendimentos/useCases/listAtendimentoByMonth/ListAtendimentoMouthController";

const atendimentoRoutes = Router();

const createAtendimentoController = new CreateAtendimentoController()
const listAtendimentoController = new ListAtendimentoController()
const listAllAtendimentoController =  new ListAllAtendimentoController()
const listAtendimentoByYearController = new ListAtendimentoByYearController()
const listAtendimentoByMouthAndYear = new ListAtendimentoByMonthAndYearController()


atendimentoRoutes.post("/", createAtendimentoController.handle);
atendimentoRoutes.get("/", listAllAtendimentoController.handle)

atendimentoRoutes.get("/:ano", listAtendimentoByYearController.handle)

atendimentoRoutes.get("/:mes/:ano", listAtendimentoByMouthAndYear.handle)

atendimentoRoutes.get("/:unidadeId/:ano/:mes", listAtendimentoController.handle)





export { atendimentoRoutes };
