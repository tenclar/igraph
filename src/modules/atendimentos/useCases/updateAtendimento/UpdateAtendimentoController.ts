import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Atendimento } from '../../entities/Atendimento';

class UpdateAtendimentoController {

    async  handle(req: Request, res: Response) {
      try {
        const atendimentoId = req.params.id;
        const { quantidade, comentario } = req.body;
    
        // Use o repositório padrão
        const atendimentoRepository = getRepository(Atendimento);
    
        // Verifique se o atendimento com o ID fornecido existe
        const atendimento = await atendimentoRepository.findOne(atendimentoId);
    
        if (!atendimento) {
          return res.status(404).json({ error: "Atendimento não encontrado" });
        }
    
        // Atualize os dados do atendimento
        atendimento.quantidade = quantidade;
        
    
        // Salve as alterações no banco de dados
        await atendimentoRepository.save(atendimento);
    
        return res.status(200).json({ message: "Atendimento atualizado com sucesso" });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro ao atualizar o atendimento" });
      }
    }
}

export { UpdateAtendimentoController };
