import { getRepository, Repository } from "typeorm";
import { Unidades } from "../../entities/Unidades";
import { IUnidadeRepository, ICreateUnidadeDTO } from "../IUnidadeRepository";

//Implementando interface de unidade ao UnidadeRepositorio
class UnidadeRepository implements IUnidadeRepository {
  private repository: Repository<Unidades>;

  constructor() {
    this.repository = getRepository(Unidades);
  }

  async create({ data_inaugural, nome }: ICreateUnidadeDTO): Promise <void> {
    const unidade = this.repository.create({
      data_inaugural,
      nome,
    });
    await this.repository.save(unidade);
  }

  async findByName(nome: string): Promise<Unidades> {
    const unidade = this.repository.findOne({nome});
    return unidade
  }
}

export { UnidadeRepository };
