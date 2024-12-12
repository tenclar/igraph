import { Column, CreateDateColumn, Entity, Generated, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
class User {
  static findOne(arg0: { where: { nickname: any; }; }) {
    throw new Error("Method not implemented.");
  }
  @Generated("increment")
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  nickname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  nivel: boolean;

  @Column()
  status: boolean;

  // Se precisar de avatar, use a seguinte definição:
  // @Column({ nullable: true })
  // avatar: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export { User };
