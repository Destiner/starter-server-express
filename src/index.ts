import 'dotenv/config';
import type { Request, Response } from 'express';
import express from 'express';

import ok from './router.js';

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

function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  next: (error: Error) => void,
): void {
  res.status(400).end();
  next(err);
}
