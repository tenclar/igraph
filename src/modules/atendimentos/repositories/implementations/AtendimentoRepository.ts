import { getRepository, Repository } from "typeorm";
import { ICreateAtendimentoDTO } from "../../dtos/IcreateAtendimentoDTO";
import { Atendimento } from "../../entities/Atendimento";
import { IAtendimentoRepository } from "../IAtendimentoRepository";


class AtendimentoRepository implements IAtendimentoRepository {
  private repository: Repository<Atendimento>;

  constructor() {
    this.repository = getRepository(Atendimento);
  }
    

  async create({ data_de_atendimento,quantidade, servicos_id, usuarios_id,unidades_id }: ICreateAtendimentoDTO): Promise<Atendimento> {
    const novoatendimento = this.repository.create({
         data_de_atendimento,quantidade, servicos_id, usuarios_id,unidades_id 
    });
   const atendimento =  await this.repository.save(novoatendimento)
   return atendimento
  }

  //Lista tudo
  async listAll(): Promise<Atendimento[]> {
    const atendimentos = await this.repository.find();
    return atendimentos;
  }


/*
  async findOne(comentarios: string): Promise<Atendimento | undefined> {
    const atendimentos = this.repository.findOne({comentarios});
    return atendimentos
  }
*/
  async findByDateAndUnidade(data_de_atendimento: Date, unidadesId: number): Promise<Atendimento | undefined> {
    const atendimento = this.repository.findOne({
      where: {
        data_de_atendimento,
        unidades_id: unidadesId
      }
    })
    return atendimento
  }

  async listByYear(ano: number): Promise<Atendimento[]> {
    const atendimentos = await this.repository.createQueryBuilder("atendimento")
      .where("YEAR(atendimento.data_de_atendimento) = :ano", { ano })
      .getMany();
    
    return atendimentos;
  }

  async listByMonthAndYear(mes: number, ano: number): Promise<Atendimento[]> {
        
    
    const atendimentos = await this.repository.createQueryBuilder("atendimento")
      .where("MONTH(atendimento.data_de_atendimento) like :mes", { mes: `%${mes}%`})
      .andWhere("YEAR(atendimento.data_de_atendimento) like :ano", { ano: `%${ano}%`})
      .getMany();
    
    return atendimentos;
  }


  //Pesquisa por todos os dados
  async listByUnidadeIdMonthYear(unidadeId: number, mes:number, ano: number): Promise<Atendimento[]> {
    const atendimentos = await this.repository.createQueryBuilder("atendimento")
      .where("atendimento.unidades_id LIKE :unidadeId", { unidadeId: `%${unidadeId}%` })
      .andWhere("atendimento.data_de_atendimento : dataatendimento", {dataatendimento: `%${ano-mes}`})
      .getMany();
   
    return atendimentos;
  }
  

  
  
}

export { AtendimentoRepository };
