import { Request, Response } from 'express';
export interface Controller<T = unknown> {
  handle: (req: Request, res: Response) => Promise<Response<T, Record<string, T>>>
}
