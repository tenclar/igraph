import { getRepository, Repository } from "typeorm";
import { Unidades } from "../../entities/Unidades";
import { IUnidadeRepository, ICreateUnidadeDTO } from "../IUnidadeRepository";


class UnidadeRepository implements IUnidadeRepository {
  private repository: Repository<Unidades>;

  constructor() {
    this.repository = getRepository(Unidades);
  }
  async findById(id: number): Promise<Unidades | undefined> {
    const unidade = await this.repository.findOne({id});
    return unidade
  }
  save(unidades: Unidades): Promise<void> {
    throw new Error("Method not implemented.");
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

  async delete(unidade: Unidades): Promise<void> {
    await this.repository.remove(unidade)
  }
}

export { UnidadeRepository };
