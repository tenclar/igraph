import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetServicosUseCase } from "./GetServicosUseCase";

class GetServicosController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { nome } = request.params;
    
        const getServicosUseCase = container.resolve(GetServicosUseCase);
    
        const servico = await getServicosUseCase.execute();
    
        if (servico) {
          return response.json(servico);
        } else {
          return response.status(404).json({ message: "Serviço não encontrada" });
        }
      }
    }
    export {GetServicosController}