import { NextFunction, Request, Response } from 'express';
import { ValidationChain } from 'express-validator';

export interface Validator {
  body: ValidationChain[];
  validateOrThrow(): (req: Request, res: Response, next: NextFunction) => void;
}
