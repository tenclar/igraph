import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumnOptions,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  UpdateDateColumn
} from "typeorm";

import { User } from "../../users/entities/User";

@Entity("auditoria")
class Auditoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ip: string;

  @CreateDateColumn()
  acessoHoraData: Date;

  @Column()
  usuario_id: number;

  @Column()
  nome_tabela: string;

  @Column()
  id_tabela: number;

  @Column()
  tipo_acao: string;

  //Chaves estrangeiras

  @ManyToOne(() => User)
  @JoinColumn({ name: 'usuario_id' })
  usuario: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Auditoria };
