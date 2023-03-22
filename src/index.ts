import express from 'express';

const PORT = process.env.APP_PORT || 3333;

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send("it's working on docker");
});

app.listen(PORT);
