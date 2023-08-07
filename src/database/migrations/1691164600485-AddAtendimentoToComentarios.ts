import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
  } from "typeorm";
  import { Query } from "typeorm/driver/Query";
  
  export class AddAtendimentoToComentarios1691162542299
    implements MigrationInterface
  {
    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn(
        "comentarios",
        new TableColumn({
          name: "atendimentos_id",
          type: "int",
          isNullable: false,
        })
      );
      await queryRunner.createForeignKey(
        "comentarios",
        new TableForeignKey({
          name: "atendimentosfk",
          columnNames: ["atendimentos_id"],
          referencedColumnNames: ["id"],
          referencedTableName:"atendimentos",
          onUpdate: "CASCADE"
        })
      );
    }
  
    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey("comentarios", "atendimentosfk")
      await queryRunner.dropColumn("comentarios", "atendimentos_id")
    }
  }
  