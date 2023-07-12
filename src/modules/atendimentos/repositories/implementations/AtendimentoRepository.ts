import { getRepository, Repository } from "typeorm";
import { Atendimento } from "../../entities/Atendimento";
import { ICreateAtendimentoDTO, IAtendimentoRepository } from "../IAtendimentoRepository";


class AtendimentoRepository implements IAtendimentoRepository {
  private repository: Repository<Atendimento>;

  constructor() {
    this.repository = getRepository(Atendimento);
  }

  async listBySearch(unidadeId: number, ano: number): Promise<Atendimento[]> {
    const atendimentos = await this.repository.createQueryBuilder("atendimento")
      .where("atendimento.unidades_id LIKE :unidadeId", { unidadeId: `%${unidadeId}%` })
        
      .getMany();
   
    return atendimentos;
  }
  

  async create({ comentarios,data_de_Atendimento,quantidade, servicos_id, usuarios_id,unidades_id }: ICreateAtendimentoDTO): Promise<void> {
    const atendimento = this.repository.create({
        comentarios, data_de_Atendimento,quantidade, servicos_id, usuarios_id,unidades_id 
    });
    await this.repository.save(atendimento)
  }

  async findOne(comentarios: string): Promise<Atendimento> {
    const atendimentos = this.repository.findOne({comentarios});
    return atendimentos
  }

  async listAll(): Promise<Atendimento[]> {
    const atendimentos = await this.repository.find();
    return atendimentos;
  }
  
}

export { AtendimentoRepository };