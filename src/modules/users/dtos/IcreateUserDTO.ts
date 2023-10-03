interface ICreateUserDTO {
    nome: string;
    password: string;
    email: string;
    nickname: string;
    nivel: number;
    status:number;
    id?: number;
    avatar?: string;
}
//avatar sera adiconado posteriormente
export {ICreateUserDTO};