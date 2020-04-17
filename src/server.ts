import express from 'express';
import routes from './routes';

import './database';

const app = express();

app.use(express.json());
app.use(routes);

const PORT = 3333;
app.listen(3333, () => {
  console.log(`Server Started on ${PORT}`);
});
