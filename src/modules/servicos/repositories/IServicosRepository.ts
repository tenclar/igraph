import { Servicos } from "../entities/Servicos";
import { ICreateServicosDTO } from "../dtos/IcreateServicosDTO";

interface IServicosRepository {
  // Busca por nome
  findByName(nome: string): Promise<Servicos | undefined>;

  // Busca por ID
  findById(id: number): Promise<Servicos | undefined>;

  // Salvar ou atualizar serviço
  save(servico: Servicos): Promise<Servicos>;

  // Listar todos os serviços
  list(): Promise<Servicos[]>;

  // Deletar serviço
  delete(servico: Servicos): Promise<void>;

  // Criar novo serviço
  create(data: ICreateServicosDTO): Promise<void>;
}

export { IServicosRepository, ICreateServicosDTO };
