import { Column, CreateDateColumn, Entity, Generated, PrimaryGeneratedColumn } from "typeorm";

@Entity("unidades")
class Unidades {

    @Generated("increment")
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @CreateDateColumn()
    data_inaugural: Date;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;
}

export { Unidades };
