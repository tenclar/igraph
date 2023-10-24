import { Comentarios } from "../entities/Comentarios";
import { ICreateComentariosDTO } from "../dtos/IcreateComentariosDTO";

interface IComentariosRepository {
    create({ comentarios, atendimentos_id }: ICreateComentariosDTO): Promise<Comentarios>; // Atualize o tipo de retorno para Promise<Comentarios>
  
    list(): Promise<Comentarios[]>;
  }
  
  export { IComentariosRepository , ICreateComentariosDTO};