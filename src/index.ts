import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import 'reflect-metadata';
import './database/connection';
import routes from './routes';
import cors from 'cors';

const PORT = process.env.APP_PORT || 3333;

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(PORT);
