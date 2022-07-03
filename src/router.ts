import { Request, Response } from 'express';

export default function ok(_req: Request, res: Response): void {
  res.send('OK');
}
