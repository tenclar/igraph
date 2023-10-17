import { Comentarios } from "../entities/Comentarios";
import { ICreateComentariosDTO } from "../dtos/IcreateComentariosDTO";

interface IComentariosRepository {
    create({
        comentarios,
    }: ICreateComentariosDTO): Promise<void>;
    list(): Promise<Comentarios[] |[]>;
}

export{IComentariosRepository, ICreateComentariosDTO}