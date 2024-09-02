import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Unidades } from "../../entities/Unidades";

class UpdateUnidadesController {
  async handle(req: Request, res: Response) {
    try {
      const unidadeId = req.params.id;
      const { nome, data_inaugural } = req.body;

      const unidadeRepository = getRepository(Unidades);

      const unidade = await  unidadeRepository.findOne(unidadeId);

      if (!unidade) {
        return res.status(404).json({ error: "Unidade não encontrada" });
      }

      unidade.nome = nome;
      unidade.data_inaugural = data_inaugural

      await unidadeRepository.save(unidade);
      return res
        .status(200)
        .json({ message: "Unidade Atualizada com Sucesso" });
    } catch (error) {
      console.error(error);
      return res
        .status(200)
        .json({ message: "Unidade atualizada com sucesso" });
    }
  }
}

export { UpdateUnidadesController };
