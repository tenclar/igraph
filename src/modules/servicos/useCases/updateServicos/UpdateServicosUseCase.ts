import { IServicosRepository } from "../../repositories/IServicosRepository";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
  id: number;
  nome: string;
}

class UpdateServicoUseCase {
  constructor(private servicosRepository: IServicosRepository) {}
  async execute(data: IRequest): Promise<void> {
    const { id, nome } = data;

    const servico = await this.servicosRepository.findById(id);

    if (!servico) {
      throw new AppError("Serviço não encontrado");
    }
    servico.nome = nome;
    await this.servicosRepository.save(servico);
  }
}

export { UpdateServicoUseCase };
