import { ValidationError } from 'express-validator';
import { ErrorBody } from '../interfaces';

export const routeErrorMapper = (error: ValidationError[]): ErrorBody[] => {
  return error.map((err) => ({
    message: err.msg,
  }));
};
