import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateServicos1681223354150 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "servicos",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
          },
          {
            name:"nome",
            type:"varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()"
          },
          {
            name:"updated_at",
            type:"timestamp",
            default: "now()"
          }
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("servicos")
  }
}
