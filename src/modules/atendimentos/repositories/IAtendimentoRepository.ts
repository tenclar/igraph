import { ICreateAtendimentoDTO } from "../dtos/IcreateAtendimentoDTO";
import { Atendimento } from "../entities/Atendimento";

interface IRequest {
  mes?: number;
  ano?: number;
  unidade_id?: number;
  servico_id?: number;
  usuario_id?: number;
}

interface IAtendimentoRepository {
  listWithFilters(filters: IRequest): Promise<Atendimento[]>;
  create(atendimento: ICreateAtendimentoDTO): Promise<Atendimento>;
  findOne(id: number): Promise<Atendimento | undefined>;
  save(atendimento: Atendimento): Promise<Atendimento>;
  delete(atendimento: Atendimento): Promise<void>;
  deleteRelatedComentarios(atendimento: Atendimento): Promise<void>;

  listByUnidade(unidadeId: number): Promise<Atendimento[]>;
  findByDateAndUnidade(data_de_atendimento: Date, unidadesId: number): Promise<Atendimento | undefined>;
  listByUnidadeIdMonthYear(unidadeId: number, mes: number, ano: number): Promise<Atendimento[]>;
  listByYear(ano:number): Promise<Atendimento[]>;
  listByMonthAndYear(mes: number, ano: number): Promise<Atendimento[]>;
  listAll(): Promise<Atendimento[]>;
  listAtendimentoByParams(unidadeId:number, dataInicio: Date, dataFim: Date): Promise<Atendimento[]>;
  listAtendimentoByDate(dataInicio:Date, dataFim:Date): Promise<Atendimento[]>;
  findByServiceId(servico_id: number): Promise<Atendimento[]>

}

export { IAtendimentoRepository, IRequest };
