import { Validator } from '@/presentation/interfaces';
import { NextFunction, Request, Response } from 'express';
import { check, validationResult } from 'express-validator';
import { HTTP_STATUS } from '../constants';
import { routeErrorMapper } from '../errors';

export class CreateBookValidator implements Validator {
  public body = [
    check('title')
      .notEmpty()
      .withMessage('title is required')
      .isLength({ max: 500 })
      .withMessage('title length must be less than 500'),

    check('ISBN')
      .notEmpty()
      .withMessage('ISBN is required')
      .isISBN()
      .withMessage('ISBN must be a valid ISBN'),
  ];

  validateOrThrow() {
    return (req: Request, res: Response, next: NextFunction) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(HTTP_STATUS.BAD_REQUEST).json(routeErrorMapper(errors.array()));
      }
      return next();
    };
  }
}
