import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
  } from "typeorm";

export class AddServicoToAtendimento1682008027612 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "atendimentos",
            new TableColumn({
              name: "servicos_id",
              type: "int",
              isNullable: false,
            })
          );
          await queryRunner.createForeignKey(
            "atendimentos",
            new TableForeignKey({
              name: "servicofk",
              columnNames: ["servicos_id"],
              referencedColumnNames: ["id"],
              referencedTableName: "servicos",
              onUpdate: "CASCADE",
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('atendimento', 'servicofk');
        await queryRunner.dropColumn('atendimento', 'servicos_id');
    }

}
