import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3307,
  username: "andreysson",
  password: "senha",
  database: "igraph",
  entities: [__dirname + '/modules/**/*/entities/*.ts'], // Ajuste para o caminho correto
  migrations: [__dirname + '/database/migrations/*.ts'], // Caminho das migrações
  synchronize: false, // Altere para true apenas em desenvolvimento
});

export default AppDataSource;
