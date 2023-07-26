interface ICreateAtendimentoDTO {
    quantidade: number;
    comentarios: string;
    data_de_atendimento: Date;
    unidades_id: number;
    servicos_id: number;
    usuarios_id: number;
}

export { ICreateAtendimentoDTO };
