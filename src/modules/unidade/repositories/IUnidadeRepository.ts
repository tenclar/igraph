import { Unidades } from "../entities/Unidades";
import { ICreateUnidadeDTO } from "../dtos/IcreateUnidadeDTO";


interface IUnidadeRepository {
    create({data_inaugural, nome}: ICreateUnidadeDTO): Promise<void>;
    findByName(nome: string): Promise <Unidades>;
}

export {IUnidadeRepository, ICreateUnidadeDTO};