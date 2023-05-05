
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
class User {
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
  status: string;  

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
