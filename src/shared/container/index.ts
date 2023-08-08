import { container } from "tsyringe";

import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/users/repositories/implementations/UsersRepository";
import { IUnidadeRepository } from "../../modules/unidade/repositories/IUnidadeRepository";
import { UnidadeRepository } from "../../modules/unidade/repositories/implementations/UnidadeRepository";
import { IServicosRepository } from "../../modules/servicos/repositories/IServicosRepository";
import { ServicoRepository } from "../../modules/servicos/repositories/implementations/ServicoRepository";
import { IAtendimentoRepository } from "../../modules/atendimentos/repositories/IAtendimentoRepository";
import { AtendimentoRepository } from "../../modules/atendimentos/repositories/implementations/AtendimentoRepository";
import { AuditoriaRepository } from "../../modules/auditoria/repositories/implementations/AuditoriaRepository";
import { IAuditoriaRepository } from "../../modules/auditoria/repositories/IAuditoriaRepository";
import { IComentariosRepository } from "../../modules/comentarios/repositories/IComentariosRepository";
import { ComentariosRepository } from "../../modules/comentarios/repositories/implementations/ComentariosRepository";
// Users
container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
container.registerSingleton<IUnidadeRepository>(
  "UnidadeRepository",
  UnidadeRepository
);
container.registerSingleton<IServicosRepository>(
  "ServicoRepository",
  ServicoRepository
);
container.registerSingleton<IAtendimentoRepository>(
  "AtendimentoRepository",
  AtendimentoRepository
);
container.registerSingleton<IAuditoriaRepository>(
  "AuditoriaRepository",
  AuditoriaRepository
);

container.registerSingleton<IComentariosRepository>(
  "ComentariosRepository",
  ComentariosRepository
);
