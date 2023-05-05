import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddUsuarioToAtendimento1682345500058 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "atendimentos",
            new TableColumn({
              name: "usuarios_id",
              type: "int",
              isNullable: false,
            })
          );
          await queryRunner.createForeignKey(
            "atendimentos",
            new TableForeignKey({
              name: "usuariofk",
              columnNames: ["usuarios_id"],
              referencedColumnNames: ["id"],
              referencedTableName: "users",
              onUpdate: "CASCADE",
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("atendimentos", "usuariofk")
        await queryRunner.dropColumn('atendimentos', 'usuarios_id');
    }

}
