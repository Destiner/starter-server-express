import { config } from 'dotenv';
import express from 'express';

import ok from './router';

config();

const app = express();

// CORS
// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.use((_req: any, res: any, next: any) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.get('/', ok);

app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function errorHandler(err: any, _req: any, res: any, next: any): void {
  res.status(400).end();
  next(err);
}
