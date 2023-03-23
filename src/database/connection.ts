import { DataSource } from 'typeorm';
import { Employee } from './entities/Employee';
import { TimeRegister } from './entities/TimeRegister';

export const DataSourceConnection = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'admin',
  database: process.env.DB_NAME || 'timeregister',
  synchronize: true,
  logging: true,
  entities: [Employee, TimeRegister],
  migrations: [],
});

DataSourceConnection.initialize()
  .then(() => {
    console.log('database is working');
  })
  .catch((error) => console.log('database error connection: ', error));
