import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateNivelToBoolean1733753403860 implements MigrationInterface {
    name = 'UpdateNivelToBoolean1733753403860'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`auditoria\` DROP FOREIGN KEY \`usuariosfk\``);
        await queryRunner.query(`ALTER TABLE \`atendimentos\` DROP FOREIGN KEY \`servicofk\``);
        await queryRunner.query(`ALTER TABLE \`atendimentos\` DROP FOREIGN KEY \`unidadefk\``);
        await queryRunner.query(`ALTER TABLE \`atendimentos\` DROP FOREIGN KEY \`usuariofk\``);
        await queryRunner.query(`ALTER TABLE \`comentarios\` DROP FOREIGN KEY \`atendimentosfk\``);
        await queryRunner.query(`DROP INDEX \`UQ_97672ac88f789774dd47f7c8be3\` ON \`users\``);
        await queryRunner.query(`DROP INDEX \`UQ_ad02a1be8707004cb805a4b5023\` ON \`users\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`nivel\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`nivel\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`status\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`servicos\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`servicos\` ADD \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`servicos\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`servicos\` ADD \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`unidades\` DROP COLUMN \`data_inaugural\``);
        await queryRunner.query(`ALTER TABLE \`unidades\` ADD \`data_inaugural\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`unidades\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`unidades\` ADD \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`unidades\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`unidades\` ADD \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`auditoria\` DROP COLUMN \`acessoHoraData\``);
        await queryRunner.query(`ALTER TABLE \`auditoria\` ADD \`acessoHoraData\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`auditoria\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`auditoria\` ADD \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`auditoria\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`auditoria\` ADD \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`atendimentos\` DROP COLUMN \`data_de_atendimento\``);
        await queryRunner.query(`ALTER TABLE \`atendimentos\` ADD \`data_de_atendimento\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`atendimentos\` CHANGE \`quantidade\` \`quantidade\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`atendimentos\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`atendimentos\` ADD \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`atendimentos\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`atendimentos\` ADD \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`comentarios\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`comentarios\` ADD \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`comentarios\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`comentarios\` ADD \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`auditoria\` ADD CONSTRAINT \`FK_e3351946be53c7cd3286ed4c49d\` FOREIGN KEY (\`usuario_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`atendimentos\` ADD CONSTRAINT \`FK_a1274e774c3940a575d9dcf00eb\` FOREIGN KEY (\`unidades_id\`) REFERENCES \`unidades\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`atendimentos\` ADD CONSTRAINT \`FK_1407c7e20e84b0ebef198a130a5\` FOREIGN KEY (\`servicos_id\`) REFERENCES \`servicos\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`atendimentos\` ADD CONSTRAINT \`FK_368c5661f51547855dc60c4c86c\` FOREIGN KEY (\`usuarios_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`comentarios\` ADD CONSTRAINT \`FK_660cb103a6f5f787b27bed8795f\` FOREIGN KEY (\`atendimentos_id\`) REFERENCES \`atendimentos\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`comentarios\` DROP FOREIGN KEY \`FK_660cb103a6f5f787b27bed8795f\``);
        await queryRunner.query(`ALTER TABLE \`atendimentos\` DROP FOREIGN KEY \`FK_368c5661f51547855dc60c4c86c\``);
        await queryRunner.query(`ALTER TABLE \`atendimentos\` DROP FOREIGN KEY \`FK_1407c7e20e84b0ebef198a130a5\``);
        await queryRunner.query(`ALTER TABLE \`atendimentos\` DROP FOREIGN KEY \`FK_a1274e774c3940a575d9dcf00eb\``);
        await queryRunner.query(`ALTER TABLE \`auditoria\` DROP FOREIGN KEY \`FK_e3351946be53c7cd3286ed4c49d\``);
        await queryRunner.query(`ALTER TABLE \`comentarios\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`comentarios\` ADD \`updated_at\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`comentarios\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`comentarios\` ADD \`created_at\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`atendimentos\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`atendimentos\` ADD \`updated_at\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`atendimentos\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`atendimentos\` ADD \`created_at\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`atendimentos\` CHANGE \`quantidade\` \`quantidade\` int NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`atendimentos\` DROP COLUMN \`data_de_atendimento\``);
        await queryRunner.query(`ALTER TABLE \`atendimentos\` ADD \`data_de_atendimento\` date NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`auditoria\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`auditoria\` ADD \`updated_at\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`auditoria\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`auditoria\` ADD \`created_at\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`auditoria\` DROP COLUMN \`acessoHoraData\``);
        await queryRunner.query(`ALTER TABLE \`auditoria\` ADD \`acessoHoraData\` timestamp(0) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`unidades\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`unidades\` ADD \`updated_at\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`unidades\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`unidades\` ADD \`created_at\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`unidades\` DROP COLUMN \`data_inaugural\``);
        await queryRunner.query(`ALTER TABLE \`unidades\` ADD \`data_inaugural\` date NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`servicos\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`servicos\` ADD \`updated_at\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`servicos\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`servicos\` ADD \`created_at\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`updated_at\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`created_at\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`status\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`nivel\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`nivel\` int NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`UQ_ad02a1be8707004cb805a4b5023\` ON \`users\` (\`nickname\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`UQ_97672ac88f789774dd47f7c8be3\` ON \`users\` (\`email\`)`);
        await queryRunner.query(`ALTER TABLE \`comentarios\` ADD CONSTRAINT \`atendimentosfk\` FOREIGN KEY (\`atendimentos_id\`) REFERENCES \`atendimentos\`(\`id\`) ON DELETE NO ACTION ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`atendimentos\` ADD CONSTRAINT \`usuariofk\` FOREIGN KEY (\`usuarios_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`atendimentos\` ADD CONSTRAINT \`unidadefk\` FOREIGN KEY (\`unidades_id\`) REFERENCES \`unidades\`(\`id\`) ON DELETE NO ACTION ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`atendimentos\` ADD CONSTRAINT \`servicofk\` FOREIGN KEY (\`servicos_id\`) REFERENCES \`servicos\`(\`id\`) ON DELETE NO ACTION ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`auditoria\` ADD CONSTRAINT \`usuariosfk\` FOREIGN KEY (\`usuario_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE CASCADE`);
    }

}
