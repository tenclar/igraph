import { Column,CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("servicos")
class Servicos {
    
    @PrimaryGeneratedColumn()
    id: number;


    @Column()
    nome: string;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;
}

export {Servicos}