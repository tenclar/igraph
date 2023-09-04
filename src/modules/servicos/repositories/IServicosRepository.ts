import { Servicos } from "../entities/Servicos";
import { ICreateServicosDTO } from "../dtos/IcreateServicosDTO";

interface IServicosRepository {
  create({ nome }: ICreateServicosDTO): Promise<void>;
  findByName(nome: string): Promise<Servicos | undefined>;
  list(): Promise<Servicos[]>; // Fixed the typo here
}

export { IServicosRepository, ICreateServicosDTO };