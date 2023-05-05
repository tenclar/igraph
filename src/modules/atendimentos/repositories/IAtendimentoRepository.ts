import { Atendimento } from "../entities/Atendimento"
import { ICreateAtendimentoDTO } from "../dtos/IcreateAtendimentoDTO"

interface IAtendimentoRepository {
  create({
    data_de_Atendimento,
    quantidade,
    comentarios,
  }: ICreateAtendimentoDTO): Promise<void>;
  findOne(comentarios: string): Promise<Atendimento>;
}

export { IAtendimentoRepository , ICreateAtendimentoDTO};
