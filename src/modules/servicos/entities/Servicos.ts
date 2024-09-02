import { Column, CreateDateColumn, Entity, Generated, PrimaryGeneratedColumn } from "typeorm";

@Entity("servicos")
class Servicos {
    
    @Generated("increment")
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;
  
}

export { Servicos };
