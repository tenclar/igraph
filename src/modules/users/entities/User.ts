
import { Column, CreateDateColumn, Entity, Generated, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
class User {
  
  @Generated("increment")
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  nome: string;

  @Column()
  nickname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  nivel: number;  

  @Column()
  status: number;

  //tive que declarar tal caracteristica nessa coluna.
  /*
  @Column({nullable:true})
  avatar: string;
*/
  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

}

export { User };
