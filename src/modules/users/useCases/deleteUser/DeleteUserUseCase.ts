
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usuarioRepository: IUsersRepository
    ) {}

    async execute(id: number): Promise<void> {
        const usuario = await this.usuarioRepository.findById(id);

        if(!usuario) {
            throw new Error("Usuario não encontrado");
        }

        await this.usuarioRepository.delete(usuario)
    }
}

export {DeleteUserUseCase}