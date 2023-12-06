import { Servicos } from "../entities/Servicos";
import { ICreateServicosDTO } from "../dtos/IcreateServicosDTO";

interface IServicosRepository {
  create({ nome }: ICreateServicosDTO): Promise<void>;
  findByName(nome: string): Promise<Servicos | undefined>;
  findById(id: number): Promise<Servicos | undefined>
  save(servico: Servicos): Promise<Servicos[]>
  list(): Promise<Servicos[]>; // Fixed the typo here
}

export { IServicosRepository, ICreateServicosDTO };