import { Router } from "express";
import { CreateAtendimentoController } from "../modules/atendimentos/useCases/createAtendimento/CreateAtendimentoController";
import { ListAllAtendimentoController } from "../modules/atendimentos/useCases/listAll/ListAllAtendimentoController";
import { ListAtendimentoByMonthAndYearController } from "../modules/atendimentos/useCases/listAtendimentoByMonth/ListAtendimentoMouthController";
import { ListAtendimentoByUnidadeIdMonthYearController } from "../modules/atendimentos/useCases/listAtendimentoByUnidadeIdMouthYear/ListAtendimentoByUnidadeIdMonthYearController";
import { ListAtendimentoByYearController } from "../modules/atendimentos/useCases/listAtendimentoYear/ListAtendimentoYearController";
import { ListAtendimentosByDateController } from "../modules/atendimentos/useCases/listAtendimentosByDate/ListAtendimentosByDateController";
import { UpdateAtendimentoController } from "../modules/atendimentos/useCases/updateAtendimento/UpdateAtendimentoController";
import { DeleteAtendimentoController } from "../modules/atendimentos/useCases/deleteAtendimento/DeleteAtendimentoController";
import { ListAtendimentoByParamsController } from "../modules/atendimentos/useCases/ListAtendimentosByParams/ListAtendimentoByParamsController";
import { ListAtendimentoByUnidadeController } from "../modules/atendimentos/useCases/listAtendimentoByUnidade/ListAtendimentobyUnidadeController";
import { GetAtendimentoByIdController } from "../modules/atendimentos/useCases/listAtendimentoById/GetAtendimentoByIdController";

const atendimentoRoutes = Router();

const createAtendimentoController = new CreateAtendimentoController()
//const listAtendimentoByUnidadeIdMonthYearController = new ListAtendimentoByUnidadeIdMonthYearController()
const listAllAtendimentoController =  new ListAllAtendimentoController()
//const listAtendimentoByYearController = new ListAtendimentoByYearController()
const listAtendimentoByMouthAndYear = new ListAtendimentoByMonthAndYearController() //Funcionando
const updateAtendimentoController = new UpdateAtendimentoController()
const deleteAtendimentoController = new DeleteAtendimentoController(); 
//const listAtendimentoByParamsController = new ListAtendimentoByParamsController(); 
//const listAtendimentosByDateController = new ListAtendimentosByDateController();
//const listAtendimentoByUnidadeController = new ListAtendimentoByUnidadeController();
const getAtendimentoById = new GetAtendimentoByIdController() //Funcionando

atendimentoRoutes.post("/", createAtendimentoController.handle);

atendimentoRoutes.get("/", listAllAtendimentoController.handle)
//atendimentoRoutes.get("/:ano", listAtendimentoByYearController.handle)
atendimentoRoutes.get("/:mes/:ano", listAtendimentoByMouthAndYear.handle)
//atendimentoRoutes.get("/:unidadeId/:ano/:mes", listAtendimentoByUnidadeIdMonthYearController.handle)
//atendimentoRoutes.post('/:unidadeId/:dataInicio/:dataFim', listAtendimentoByParamsController.handle); // Adicione esta linha para o novo endpoint
//atendimentoRoutes.post('/:dataInicio/:dataFim', listAtendimentosByDateController.handle); 
//atendimentoRoutes.get('/:unidadeId', listAtendimentoByUnidadeController.handle);
//atendimentoRoutes.get("/unidades/:id", listAtendimentoByUnidadeController.handle);
atendimentoRoutes.get('/:id', getAtendimentoById.handle);


atendimentoRoutes.put("/:id", updateAtendimentoController.handle);

atendimentoRoutes.delete('/:id', deleteAtendimentoController.handle); 





export { atendimentoRoutes };
