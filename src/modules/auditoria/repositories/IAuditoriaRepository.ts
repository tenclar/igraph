import { Auditoria } from "../entities/Auditoria";
import { ICreateAuditoriaDTO } from "../dtos/IcreateAuditoriaDTO";

interface IAuditoriaRepository {
    create({
        ip,
        acessoHoraData,
        tipo_acao,
        nome_tabela,
        usuario_id,
        id_tabela
    }: ICreateAuditoriaDTO): Promise<void>;
    findOne(tipo_acao: string) :Promise<Auditoria | undefined>;
}

export{IAuditoriaRepository, ICreateAuditoriaDTO}