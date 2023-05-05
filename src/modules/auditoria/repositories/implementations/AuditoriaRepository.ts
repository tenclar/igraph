import { getRepository, Repository } from "typeorm";
import { Auditoria } from "../../entities/Auditoria";
import {
  ICreateAuditoriaDTO,
  IAuditoriaRepository,
} from "../IAuditoriaRepository";

class AuditoriaRepository implements IAuditoriaRepository {
  private repositroy: Repository<Auditoria>;

  constructor() {
    this.repositroy = getRepository(Auditoria);
  }

  async create({
    ip,
    acessoHoraData,
    tipo_acao,
    nome_tabela,
    usuario_id,
    id_tabela
  }: ICreateAuditoriaDTO): Promise<void> {
    const auditoria = this.repositroy.create({
      ip,
      acessoHoraData,
      tipo_acao,
      nome_tabela,
      usuario_id,
      id_tabela
    });
    await this.repositroy.save(auditoria);
  }

  async findOne(tipo_acao: string): Promise<Auditoria> {
    const auditoria = this.repositroy.findOne({ tipo_acao });
    return auditoria;
  }
}

export { AuditoriaRepository };
