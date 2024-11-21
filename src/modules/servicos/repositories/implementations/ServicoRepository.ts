import { getRepository, Repository } from "typeorm";
import { Servicos } from "../../entities/Servicos";
import { ICreateServicosDTO, IServicosRepository } from "../IServicosRepository";

//Implementando interface de serviço ao repositorio
class ServicoRepository implements IServicosRepository {
  private repository: Repository<Servicos>;

  constructor() {
    this.repository = getRepository(Servicos);
  }
  
 

  async save(servico: Servicos): Promise<Servicos>{
    return await this.repository.save(servico)
  }
  
  async findById(id: number): Promise<Servicos | undefined> {
    const servico = await this.repository.findOne({
      where:{id},
    });
    return servico || undefined
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
    const servicos = await this.repository.findOne({ 
      where: {nome}
     });

   /*  if (!servicos) {
      throw new Error(`Servico with name ${nome} not found`);
    } */

    return servicos || undefined;
  }
}

export { ServicoRepository };
