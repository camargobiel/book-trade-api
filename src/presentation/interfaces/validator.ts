import { Request, Response } from 'express';

export interface Validator {
  validate(req: Request, res: Response): void;
}
