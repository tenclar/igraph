import { DataSource } from 'typeorm';
import * as path from 'path';

const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3307,
  username: "andreysson",
  password: "senha",
  database: "igraph",
  entities: [path.resolve(__dirname, 'modules/**/*/entities/*.ts')], // Usando path.resolve
  migrations: [path.resolve(__dirname, 'database/migrations/*.ts')], // Usando path.resolve
  synchronize: false, // Altere para true apenas em desenvolvimento
});

export default AppDataSource;
