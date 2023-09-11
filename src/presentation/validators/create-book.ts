import { Validator } from '@/presentation/interfaces';
import { NextFunction, Request, Response } from 'express';
import { check, checkExact, validationResult } from 'express-validator';
import { HTTP_STATUS } from '../constants';
import { routeErrorMapper } from '../errors';

export class CreateBookValidator implements Validator {
  public body = checkExact([
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
    check('description')
      .notEmpty()
      .withMessage('description is required')
      .isLength({ max: 5000 })
      .withMessage('description length must be less than 5000'),
    check('pageCount')
      .isInt({ min: 1 })
      .withMessage('pageCount must be a positive integer'),
    check('publishDate')
      .isISO8601()
      .withMessage('publishDate must be a valid ISO8601 date'),
  ]);

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
