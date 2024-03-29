import { getRepository, Repository } from "typeorm";
import { ICreateAtendimentoDTO } from "../../dtos/IcreateAtendimentoDTO";
import { Atendimento } from "../../entities/Atendimento";
import { IAtendimentoRepository } from "../IAtendimentoRepository";
import { Comentarios } from "../../../comentarios/entities/Comentarios";


class AtendimentoRepository implements IAtendimentoRepository {
  private repository: Repository<Atendimento>;

  constructor() {
    this.repository = getRepository(Atendimento);
  }
  
  save(atendimento: Atendimento): Promise<Atendimento> {
    throw new Error("Method not implemented.");
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
  
  
  
  async findOne(id: number): Promise<Atendimento | undefined> {
    const atendimentos = this.repository.findOne(id);
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
    .where("atendimento.unidades_id = :unidadeId", { unidadeId })
    .andWhere("DATE_FORMAT(atendimento.data_de_atendimento, '%Y-%m') = :dataatendimento", { dataatendimento: `${ano}-${mes}` })    
    .getMany();
    
    return atendimentos;
  }
  
  async listAtendimentoByParams(unidadeId: number, dataInicio: Date, dataFim: Date): Promise<Atendimento[]> {
    const atendimentos = await this.repository.createQueryBuilder("atendimento")
    .where("atendimento.unidades_id = :unidadeId", { unidadeId })
    .andWhere("atendimento.data_de_atendimento BETWEEN :dataInicio AND :dataFim", { dataInicio, dataFim })
    .getMany();
    
    return atendimentos;
  }
  
  async listAtendimentoByDate(dataInicio: Date, dataFim: Date): Promise<Atendimento[]> {
    const atendimentos = await this.repository.createQueryBuilder("atendimento")
    .where("atendimento.data_de_atendimento BETWEEN :dataInicio AND :dataFim", { dataInicio, dataFim })
    .getMany();
    
    return atendimentos
  }
  

  async delete(atendimento: Atendimento): Promise<void> {
    await this.repository.remove(atendimento);
  }

   async deleteRelatedComentarios(atendimento: Atendimento): Promise<void> {
    const comentariosRepository = getRepository(Comentarios);
    const comentarios = await comentariosRepository.find({where: {atendimentos_id: atendimento.id}});

    await comentariosRepository.remove(comentarios)
  }
}

export { AtendimentoRepository };
