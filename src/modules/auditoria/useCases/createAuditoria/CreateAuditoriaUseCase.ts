import { inject, injectable } from "tsyringe";
import { IAuditoriaRepository } from "../../repositories/IAuditoriaRepository";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
  ip: string;
  acessoHoraData: Date;
  usuario_id: number;
  tipo_acao: string;
  nome_tabela: string;
  id_tabela: number;
}

@injectable()
class CreateAuditoriaUseCase {
  constructor(
    @inject("AuditoriaRepository")
    private auditoriaRepository: IAuditoriaRepository
  ) {}
  async execute({
    ip,
    acessoHoraData,
    usuario_id,
    tipo_acao,
    nome_tabela,
    id_tabela,
  }: IRequest): Promise<void> {
    
    const auditora = {
      ip,
      acessoHoraData,
      usuario_id,
      tipo_acao,
      nome_tabela,
      id_tabela,
    };

    await this.auditoriaRepository.create(auditora);
  }
}

export { CreateAuditoriaUseCase };
