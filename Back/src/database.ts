import { Connection, createConnection, ConnectionOptions } from 'typeorm';
import logger from './lib/logger';
// import databaseConfig from '../ormconfig.json';
import entities from './entity';

export const getConnection = async (): Promise<Connection> => {
  const connectionOptions: ConnectionOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '1234',
    database: 'Shop',
    synchronize: false,
    logging: false,
    entities: entities,
    migrations: ['src/migration/**/*.ts'],
    subscribers: ['src/subscriber/**/*.ts'],
    cli: {
      entitiesDir: 'src/entity',
      migrationsDir: 'src/migration',
      subscribersDir: 'src/subscriber',
    },
  };

  try {
    const connection = createConnection(connectionOptions);
    logger.green('[SERVER / DB] connected');
    return connection;
  } catch (err) {
    logger.red('[SERVER / DB] Connection Error', err.message);
  }
};
