import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";
// inserindo coluna com chave estrangiera
export class AddUnidadeToAtendimentos1682007329355
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "atendimentos",
      new TableColumn({
        name: "unidades_id",
        type: "int",
        isNullable: false,
      })
    );
    await queryRunner.createForeignKey(
      "atendimentos",
      new TableForeignKey({
        name: "unidadefk",
        columnNames: ["unidades_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "unidades",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('atendimentos', 'unidadefk');
    await queryRunner.dropColumn('atendimentos', 'unidades_id');
  }
}
