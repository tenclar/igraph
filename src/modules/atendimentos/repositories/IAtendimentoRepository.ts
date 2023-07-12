import { Atendimento } from "../entities/Atendimento";
import { ICreateAtendimentoDTO } from "../dtos/IcreateAtendimentoDTO";

interface IAtendimentoRepository {
  create(atendimento: Atendimento): Promise<void>;
  findOne(comentarios: string): Promise<Atendimento>;
  listAll(): Promise<Atendimento[]>;
  listBySearch(unidadeId: number, mes: number, ano: number): Promise<Atendimento[]>;
  listByYear(ano:number): Promise<Atendimento[]>;  
  listByMonthAndYear(mes:number, ano:number) : Promise<Atendimento[]>

  //  listMonthByYear(unidadeId: number, mes: number, ano: number): Promise<Atendimento[]>;

  //listYearByUnidade(unidadeId: number): Promise<Atendimento[]>;    
  // listByUnidadeMesAno(unidadeId: number, mes?: number, ano?: number): Promise<Atendimento[]>;

}
export { IAtendimentoRepository, ICreateAtendimentoDTO };
