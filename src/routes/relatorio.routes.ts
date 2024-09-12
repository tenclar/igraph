import { Router } from "express";
import { ListRelatorioController } from "../modules/atendimentos/useCases/listRelatorio/ListRelatorioController"; 

const relatorioRoutes = Router();
const relatorioController = new ListRelatorioController();

// Define a rota de relatórios com possíveis filtros como query parameters
relatorioRoutes.get("/", relatorioController.handle);
relatorioRoutes.get("/unidades/:unidade_id", relatorioController.handleByUnidade);
relatorioRoutes.get("/servicos/:servico_id", relatorioController.handleByServico);

export { relatorioRoutes };
