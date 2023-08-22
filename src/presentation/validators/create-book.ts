import { Validator } from '@/presentation/interfaces';
import { Request, Response } from 'express';

export class CreateBookValidator implements Validator {
  validate(req: Request, res: Response): void {
    console.log('res', res);
    console.log('req', req);

  }
}
