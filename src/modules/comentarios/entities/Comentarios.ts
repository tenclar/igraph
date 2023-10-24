import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { Atendimento } from "../../atendimentos/entities/Atendimento";



@Entity("comentarios")
class Comentarios {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  comentarios: string;

  //Chaves estrangeiras
  @Column()
  atendimentos_id: number;

  @ManyToOne(() => Atendimento)
  @JoinColumn({ name: 'atendimentos_id' })
  atendimento: Atendimento;
  

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Comentarios };
