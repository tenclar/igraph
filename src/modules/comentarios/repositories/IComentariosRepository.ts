import { Comentarios } from "../entities/Comentarios";
import { ICreateComentariosDTO } from "../dtos/IcreateComentariosDTO";

interface IComentariosRepository {
    create({ comentarios, atendimentos_id }: ICreateComentariosDTO): Promise<Comentarios>; // Atualize o tipo de retorno para Promise<Comentarios>
    findOne(id: number): Promise<Comentarios | undefined>;
    list(): Promise<Comentarios[]>;
    showByAtendimento(atendimentosId: number): Promise<Comentarios | undefined>;
    save(comentario: Comentarios): Promise<Comentarios>;
  }
  
  export { IComentariosRepository , ICreateComentariosDTO};