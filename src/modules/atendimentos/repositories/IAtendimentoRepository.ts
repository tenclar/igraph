import { Atendimento } from "../entities/Atendimento";
import { ICreateAtendimentoDTO } from "../dtos/IcreateAtendimentoDTO";

interface IAtendimentoRepository {
  create(atendimento: Atendimento): Promise<void>;
  findOne(comentarios: string): Promise<Atendimento>;
  listBySearch(unidadeId: number, mes: number, ano: number): Promise<Atendimento[]>;
}
export { IAtendimentoRepository, ICreateAtendimentoDTO };
