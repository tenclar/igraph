interface ICreateAuditoriaDTO {
    ip: string;
    acessoHoraData: Date;
    usuario_id: number;
    tipo_acao:string;
    nome_tabela:string;
    id_tabela:number
}

export {ICreateAuditoriaDTO}