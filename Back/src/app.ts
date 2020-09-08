import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import api from './api';
import * as path from 'path';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', api);
app.use('/public', express.static(path.join(__dirname, '../public')));

export default app;
