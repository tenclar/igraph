import { Column, CreateDateColumn, Entity, Generated, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("unidades")
class Unidades {

    @Generated("increment")
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    data_inaugural: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
  
}

export { Unidades };
