import { getRepository, Repository } from "typeorm";
import { ICreateAtendimentoDTO } from "../../dtos/IcreateAtendimentoDTO";
import { Atendimento } from "../../entities/Atendimento";
import { IAtendimentoRepository } from "../IAtendimentoRepository";


class AtendimentoRepository implements IAtendimentoRepository {
  private repository: Repository<Atendimento>;

  constructor() {
    this.repository = getRepository(Atendimento);
  }
  //Pesquisa por todos os dados
  async listBySearch(unidadeId: number, ano: number): Promise<Atendimento[]> {
    const atendimentos = await this.repository.createQueryBuilder("atendimento")
      .where("atendimento.unidades_id LIKE :unidadeId", { unidadeId: `%${unidadeId}%` })
        
      .getMany();
   
    return atendimentos;
  }
  

  async create({ comentarios,data_de_atendimento,quantidade, servicos_id, usuarios_id,unidades_id }: ICreateAtendimentoDTO): Promise<void> {
    const atendimento = this.repository.create({
        comentarios, data_de_atendimento,quantidade, servicos_id, usuarios_id,unidades_id 
    });
    await this.repository.save(atendimento)
  }

  async findOne(comentarios: string): Promise<Atendimento | undefined> {
    const atendimentos = this.repository.findOne({comentarios});
    return atendimentos
  }

  async findByDateAndUnidade(data_de_atendimento: Date, unidadesId: number): Promise<Atendimento | undefined> {
    const atendimento = this.repository.findOne({
      where: {
        data_de_atendimento,
        unidades_id: unidadesId
      }
    })
    return atendimento
  }

  //Lista tudo
  async listAll(): Promise<Atendimento[]> {
    const atendimentos = await this.repository.find();
    return atendimentos;
  }

  async listByMonthAndYear(mes: number, ano: number): Promise<Atendimento[]> {
    const atendimentos = await this.repository.createQueryBuilder("atendimento")
      .where("MONTH(atendimento.data_de_atendimento) = :mes", { mes })
      .andWhere("YEAR(atendimento.data_de_atendimento) = :ano", { ano })
      .getMany();
    
    return atendimentos;
  }
  
  async listByYear(ano: number): Promise<Atendimento[]> {
    const atendimentos = await this.repository.createQueryBuilder("atendimento")
      .where("YEAR(atendimento.data_de_atendimento) = :ano", { ano })
      .getMany();
    
    return atendimentos;
  }
  
  
}

export { AtendimentoRepository };
