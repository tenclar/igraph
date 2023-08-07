import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAtendimento1681833147735 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "atendimentos",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
            
          },
          {
            name: "data_de_atendimento",
            type: "date",
            
          },
          {
            name: "quantidade",
            type: "int",
            default:0
          },
          /*Chaves estrangeiras*/
          
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
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("atendimentos");
  }
}
