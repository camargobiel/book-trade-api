import { Controller } from '@/presentation/interfaces';
import { Request, Response } from 'express';
import { stringify } from 'flatted';

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const controllerResponse = await controller.handle(req, res);
    const data = JSON.parse(stringify(controllerResponse));
    return res.status(data.statusCode).json(data.body);
  };
};
