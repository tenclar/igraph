import { ICreateAtendimentoDTO } from "../dtos/IcreateAtendimentoDTO";
import { Atendimento } from "../entities/Atendimento";

interface IAtendimentoRepository {
  create(atendimento: ICreateAtendimentoDTO): Promise<Atendimento>;
  findOne(id: number): Promise<Atendimento | undefined>; // Adicione esta função
  save(atendimento: Atendimento): Promise<Atendimento>;
  delete(atendimento: Atendimento): Promise<void>;
  deleteRelatedComentarios(atendimento: Atendimento): Promise<void>; // Adicione esta linha

  // findOne(comentarios: string): Promise<Atendimento | undefined>;
  listByUnidade(unidade: string): Promise<Atendimento[]>;
  findByDateAndUnidade(data_de_atendimento: Date, unidadesId: number): Promise<Atendimento | undefined>
  listByUnidadeIdMonthYear(unidadeId: number, mes: number, ano: number): Promise<Atendimento[]>;
  listByYear(ano:number): Promise<Atendimento[]>;  
  listByMonthAndYear(mes: number, ano: number): Promise<Atendimento[]>
  listAll(): Promise<Atendimento[]>
  listAtendimentoByParams(unidadeId:number, dataInicio: Date, dataFim: Date ): Promise<Atendimento[]>
  listAtendimentoByDate(dataInicio:Date, dataFim:Date):Promise<Atendimento[]>

  //  listMonthByYear(unidadeId: number, mes: number, ano: number): Promise<Atendimento[]>;

  //listYearByUnidade(unidadeId: number): Promise<Atendimento[]>;    
  // listByUnidadeMesAno(unidadeId: number, mes?: number, ano?: number): Promise<Atendimento[]>;

}
export { IAtendimentoRepository };
