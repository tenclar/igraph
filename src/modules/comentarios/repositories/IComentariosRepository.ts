import { Comentarios } from "../entities/Comentarios";
import { ICreateComentariosDTO } from "../dtos/IcreateComentariosDTO";

interface IComentariosRepository {
    create({
        comentarios,
    }: ICreateComentariosDTO): Promise<void>;
    list(): Promise<Comentarios[] | undefined>;
}

export{IComentariosRepository, ICreateComentariosDTO}