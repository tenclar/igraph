import { getRepository, Repository } from "typeorm";
import { Servicos } from "../../entities/Servicos";
import { ICreateServicosDTO, IServicosRepository } from "../IServicosRepository";

//Implementando interface de serviço ao repositorio
class ServicoRepository implements IServicosRepository {
  private repository: Repository<Servicos>;

  constructor() {
    this.repository = getRepository(Servicos);
  }
  
  save(servico: Servicos): Promise<Servicos[]> {
    throw new Error("Method not implemented.");
  }
  
  async findById(id: number): Promise<Servicos | undefined> {
    const servico = await this.repository.findOne({id});
    return servico
  }
  async create({ nome }: ICreateServicosDTO): Promise <void> {
    const servico = this.repository.create({
      nome,
    });
    await this.repository.save(servico);    
  }
  
  async list(): Promise<Servicos[]> {
    const servicos = await this.repository.find();
    return servicos
  }

  async delete(servico: Servicos): Promise<void> {
    await this.repository.remove(servico);
  }

  async findByName(nome: string): Promise<Servicos | undefined> {
    const servicos = await this.repository.findOne({ nome });

   /*  if (!servicos) {
      throw new Error(`Servico with name ${nome} not found`);
    } */

    return servicos;
  }
}

export { ServicoRepository };
