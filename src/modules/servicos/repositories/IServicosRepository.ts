import { Servicos } from "../entities/Servicos";
import { ICreateServicosDTO } from "../dtos/IcreateServicosDTO";

interface IServicosRepository {
  findByName(nome: string): Promise<Servicos | undefined>;
  findById(id: number): Promise<Servicos | undefined>
  save(servico: Servicos): Promise<Servicos[]>
  list(): Promise<Servicos[]>; // Fixed the typo here
  delete(servico: Servicos): Promise<void>
  create({ nome }: ICreateServicosDTO): void;
}

export { IServicosRepository, ICreateServicosDTO };