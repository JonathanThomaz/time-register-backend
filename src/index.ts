import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import 'reflect-metadata';
import './database/connection';

const PORT = process.env.APP_PORT || 3333;

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send("it's working");
});

app.listen(PORT);
