import { Unidades } from "../entities/Unidades";
import { ICreateUnidadeDTO } from "../dtos/IcreateUnidadeDTO";


interface IUnidadeRepository {
    create({data_inaugural, nome}: ICreateUnidadeDTO): Promise<void>;
    findById(id: number): Promise<Unidades | undefined>
    save(unidades: Unidades): Promise<void>;
    findByName(nome: string): Promise <Unidades |undefined>;
    list(): Promise<Unidades[]>;
    delete(unidade: Unidades): Promise<void>
}

export {IUnidadeRepository, ICreateUnidadeDTO};