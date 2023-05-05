import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAuditoria1683049178764 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: "auditoria",
            columns: [
              {
                name: "id",
                type: "int",
                isPrimary: true,
              },
              {
                name: "ip",
                type: "varchar",
              },
              {
                name: "acessoHoraData",
                type: "timestamp",
              },
              {
                name: "tipo_acao",
                type: "varchar",
              },
              {
                name: "nome_tabela",
                type: "varchar",
              },
              {
                name: "id_tabela",
                type: "int",
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
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("auditoria");
      }

}
