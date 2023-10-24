import {MigrationInterface, QueryRunner, Table} from "typeorm";
import { Comentarios } from "../../modules/comentarios/entities/Comentarios";

export class CreateComentarios1691161065251 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"comentarios",
                columns: [
                    {
                        name: "id",
                        type:"int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                   
                    {
                        name:"comentarios",
                        type:"text",
                    }
                    ,
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                      },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("comentarios")
    }

}
