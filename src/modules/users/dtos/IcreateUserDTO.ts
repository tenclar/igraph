interface ICreateUserDTO {
    nome: string;
    password: string;
    email: string;
    nickname: string;
    nivel: boolean;
    status: boolean;
    id?: number;
    avatar?: string;
}
//avatar sera adiconado posteriormente
export {ICreateUserDTO};