import { getRepository, Repository } from "typeorm";
import { Servicos } from "../../entities/Servicos";
import { ICreateServicosDTO, IServicosRepository } from "../IServicosRepository";

//Implementando interface de serviço ao repositorio
class ServicoRepository implements IServicosRepository {
  private repository: Repository<Servicos>;

  constructor() {
    this.repository = getRepository(Servicos);
  }

  async create({ nome }: ICreateServicosDTO): Promise <void> {
    const servico = this.repository.create({
      nome,
    });
    await this.repository.save(servico);    
  }

  async findByName(nome: string): Promise<Servicos> {
    const servicos = this.repository.findOne({nome});
    return servicos
  }
}

export { ServicoRepository };
