import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";



@Entity("comentarios")
class Comentarios {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  comentarios: string;


  //Chaves estrangeiras

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Comentarios };
