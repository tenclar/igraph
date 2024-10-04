import { Router } from "express";
import { CreateAtendimentoController } from "../modules/atendimentos/useCases/createAtendimento/CreateAtendimentoController";
import { UpdateAtendimentoController } from "../modules/atendimentos/useCases/updateAtendimento/UpdateAtendimentoController";
import { ListAllAtendimentoController } from "../modules/atendimentos/useCases/listAll/ListAllAtendimentoController";
import { DeleteAtendimentoController } from "../modules/atendimentos/useCases/deleteAtendimento/DeleteAtendimentoController";
import { GetAtendimentoByIdController } from "../modules/atendimentos/useCases/listAtendimentoById/GetAtendimentoByIdController";
import { ListAtendimentoByMonthAndYearController } from "../modules/atendimentos/useCases/listAtendimentoByMonth/ListAtendimentoMouthController";
import { ListAtendimentoByUnidadeIdMonthYearController } from "../modules/atendimentos/useCases/listAtendimentoByUnidadeIdMouthYear/ListAtendimentoByUnidadeIdMonthYearController";
import { ListAtendimentoByYearController } from "../modules/atendimentos/useCases/listAtendimentoYear/ListAtendimentoYearController";
import { ListAtendimentosByDateController } from "../modules/atendimentos/useCases/listAtendimentosByDate/ListAtendimentosByDateController";
import { ListAtendimentoByParamsController } from "../modules/atendimentos/useCases/ListAtendimentosByParams/ListAtendimentoByParamsController";
import { ListAtendimentoByUnidadeIdController } from "../modules/atendimentos/useCases/listAtendimentoByUnidadeId/ListAtendimentoByUnidadeIdController";
import { ListAtendimentoByUnidadeIdUseCase } from "../modules/atendimentos/useCases/listAtendimentoByUnidadeId/ListAtendimentoByUnidadeIdUseCase";
import { ListAtendimentoByServiceController } from "../modules/atendimentos/useCases/listAtendimentoByService/ListAtendimentoByServiceController";

const atendimentoRoutes = Router();

const createAtendimentoController = new CreateAtendimentoController();

const listAllAtendimentoController =  new ListAllAtendimentoController();
const getAtendimentoById = new GetAtendimentoByIdController(); //Funcionando
const listAtendimentoByYearController = new ListAtendimentoByYearController();
const listAtendimentoByMouthAndYear = new ListAtendimentoByMonthAndYearController(); //Funcionando
const listAtendimentoByUnidadeIdController = new ListAtendimentoByUnidadeIdController();
const listAtendimentoByServiceController = new ListAtendimentoByServiceController();

const updateAtendimentoController = new UpdateAtendimentoController(); //Funcionando
const deleteAtendimentoController = new DeleteAtendimentoController(); //Funcionando


//const listAtendimentoByUnidadeIdMonthYearController = new ListAtendimentoByUnidadeIdMonthYearController()
//const listAtendimentoByParamsController = new ListAtendimentoByParamsController(); 
//const listAtendimentosByDateController = new ListAtendimentosByDateController();

atendimentoRoutes.post("/", createAtendimentoController.handle);

atendimentoRoutes.get("/", listAllAtendimentoController.handle)
atendimentoRoutes.get('/:id', getAtendimentoById.handle);
atendimentoRoutes.get("/ano/:ano", listAtendimentoByYearController.handle)
atendimentoRoutes.get("/:mes/:ano", listAtendimentoByMouthAndYear.handle)
atendimentoRoutes.get('/unidades/:unidadeId', listAtendimentoByUnidadeIdController.handle)
atendimentoRoutes.get('/atendimentos/servico/:servicoId', listAtendimentoByServiceController.handle);
//atendimentoRoutes.get("/:unidadeId/:ano/:mes", listAtendimentoByUnidadeIdMonthYearController.handle)
//atendimentoRoutes.post('/:unidadeId/:dataInicio/:dataFim', listAtendimentoByParamsController.handle); // Adicione esta linha para o novo endpoint
//atendimentoRoutes.post('/:dataInicio/:dataFim', listAtendimentosByDateController.handle); 

atendimentoRoutes.put("/:id", updateAtendimentoController.handle);

atendimentoRoutes.delete('/:id', deleteAtendimentoController.handle); 





export { atendimentoRoutes };
