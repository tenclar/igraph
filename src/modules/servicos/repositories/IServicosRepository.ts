import { Servicos } from "../entities/Servicos";
import { ICreateServicosDTO } from "../dtos/IcreateServicosDTO";

interface IServicosRepository {
    create({nome}: ICreateServicosDTO): Promise<void>;
    findByName(nome:string): Promise<Servicos>
}

export {IServicosRepository, ICreateServicosDTO}