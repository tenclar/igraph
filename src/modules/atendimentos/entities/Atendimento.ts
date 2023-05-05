import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn,UpdateDateColumn } from "typeorm";
import { Unidades } from "../../unidade/entities/Unidades";
import { Servicos } from "../../servicos/entities/Servicos";
import { User } from "../../users/entities/User";

@Entity("atendimentos")
class Atendimento {
  @PrimaryGeneratedColumn()
  id:number;

  @CreateDateColumn()
  data_de_Atendimento: Date;

  @Column()
  quantidade: number;

  @Column()
  unidades_id: number;

  @Column()
  servicos_id: number;

  @Column()
  usuarios_id: number;

  @Column()
  comentarios: string;


  @ManyToOne(() => Unidades)
  @JoinColumn({ name: 'unidades_id' })
  unidade: Unidades;

  @ManyToOne(() => Servicos)
  @JoinColumn({ name: 'servicos_id' })
  servico: Servicos;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'usuarios_id' })
  usuario: User;



  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;


}

export { Atendimento };
