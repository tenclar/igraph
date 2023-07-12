import { request, response, Router } from "express";
import { CreateAtendimentoController } from "../modules/atendimentos/useCases/createAtendimento/CreateAtendimentoController";
import { ListAtendimentoController} from "../modules/atendimentos/useCases/listAtendimentoByIdMouthYear/ListBySearchAtendimentoControler";
//import { ListAtendimentoYearController } from "../modules/atendimentos/useCases/listAtendimentoByYear/ListAtendimentoByYearController";
import { ListAllAtendimentoController } from "../modules/atendimentos/useCases/listAll/ListAllAtendimentoController";


const atendimentoRoutes = Router();

const createAtendimentoController = new CreateAtendimentoController()
const listAtendimentoController = new ListAtendimentoController()
const listAllAtendimentoController =  new ListAllAtendimentoController()
//const listAtendimentoYearController =  new ListAtendimentoYearController()


atendimentoRoutes.post("/", createAtendimentoController.handle);
atendimentoRoutes.get("/", listAllAtendimentoController.handle)
//atendimentoRoutes.get("/ano", listAtendimentoYearController.handle)
atendimentoRoutes.get("/mes/:ano", listAtendimentoController.handle)
atendimentoRoutes.get("/:unidadeId/:ano/:mes", listAtendimentoController.handle)





export { atendimentoRoutes };
