import { NextFunction, Request, Response } from 'express';
import { ContextRunner } from 'express-validator';
import { Middleware } from 'express-validator/src/base';

export interface Validator {
  body: Middleware & ContextRunner;
  validateOrThrow(): (req: Request, res: Response, next: NextFunction) => void;
}
