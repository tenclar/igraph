import { inject, injectable } from "tsyringe";
import { IServicosRepository } from "../../repositories/IServicosRepository";

interface IRequest {
  nome: string;
}

//Repositorio da tabela de seviços na OCA
@injectable()
class CreateServicoUseCase {
  constructor(
    @inject("ServicoRepository")
    private servicoRepository: IServicosRepository
  ) {}
  async execute({ nome }: IRequest): Promise<void> {
    const servicoAlreadyExists = await this.servicoRepository.findByName(nome);

    await this.servicoRepository.create({
      nome,
    });
  }
}

export { CreateServicoUseCase };
