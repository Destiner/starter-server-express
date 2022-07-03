import 'dotenv/config';
import express, { Request, Response } from 'express';

import ok from './router';

const app = express();

// CORS
app.use((_req: Request, res: Response, next: () => void) => {
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
