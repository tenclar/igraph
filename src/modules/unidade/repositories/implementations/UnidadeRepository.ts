import { getRepository, Repository } from "typeorm";
import { Unidades } from "../../entities/Unidades";
import { IUnidadeRepository, ICreateUnidadeDTO } from "../IUnidadeRepository";

class UnidadeRepository implements IUnidadeRepository {
  private repository: Repository<Unidades>;

  constructor() {
    this.repository = getRepository(Unidades);
  }

  async create({ data_inaugural, nome }: ICreateUnidadeDTO): Promise<void> {
    const unidade = this.repository.create({
      data_inaugural,
      nome,
    });
    await this.repository.save(unidade);
  }

  async findByName(nome: string): Promise<Unidades | undefined> {
    const unidade = this.repository.findOne({ nome });
    return unidade;
  }

  async list(): Promise<Unidades[]> {
    const unidades = await this.repository.find();
    return unidades;
  }
}

export { UnidadeRepository };
