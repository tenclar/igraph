import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddUsuarioToAuditoria1683203777057 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
           "auditoria",
           new TableColumn({
             name: "usuario_id",
             type: "int",
             isNullable: false,
           })
         );
         await queryRunner.createForeignKey(
           "auditoria",
           new TableForeignKey({
             name: "usuariosfk",
             columnNames: ["usuario_id"],
             referencedColumnNames: ["id"],
             referencedTableName: "users",
             onUpdate: "CASCADE",
           })
         );
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
       await queryRunner.dropForeignKey("auditoria", "usuariosfk")
       await queryRunner.dropColumn('auditoria', 'usuario_id');
   }
}

