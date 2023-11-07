import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateComentariosUseCase } from './UpdateComentariosUseCase';

class UpdateComentariosController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
        const atendimentos_id = Number(req.params.atendimentosId);
        

        if (isNaN(atendimentos_id)) {
            console.log("atendimentos_id:", atendimentos_id);
          console.log("VALOR INVALIDO")
          return res.status(400).json({ error: 'Valor inválido para atendimentos_id' });
          
        }

      const { comentarios } = req.body;

      const updateComentarioUseCase = container.resolve(UpdateComentariosUseCase);

      await updateComentarioUseCase.execute({ atendimentos_id, comentarios });
      return res.status(200).json({ message: 'Comentário atualizado com sucesso' });
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { UpdateComentariosController };
