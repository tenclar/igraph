import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1678974838040 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true
          },
          {
            name: "nome",
            type: "varchar",
          },
          {
            name: "nivel",
            type:"int",     
          },
          {
            name: "nickname",
            type: "varchar",
            isUnique: true
          },
          {
            name: "status",
            type: "varchar",
          },
          {
            name: "email",
            type: "varchar",
            isUnique: true
          },
          {
            name: "password",
            type: "varchar",
          },
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
  // nome, nivel, nickname, status, password, email
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}