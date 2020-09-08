import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as http from 'http';
import app from './app';
import * as database from './database';
import logger from './lib/logger';

const PORT = 8080;

database.getConnection();

http.createServer(app).listen(PORT || 8080, () => {
  logger.green(`[HTTP] start to ${PORT}`);
});
