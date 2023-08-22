import { AllBooksLoader } from '@/domain/usecases';
import { Controller } from '@/presentation/interfaces/controller';
import { BooksViewModel } from '@/presentation/view-models';
import { HTTP_STATUS } from '../constants';
import { BookModel } from '@/data/models';
import { Request, Response } from 'express';
import { handleError } from '../errors';

export class LoadAllBooksController implements Controller<BookModel[]> {
  constructor(
    private readonly allBooksLoader: AllBooksLoader
  ) {}

  async handle (req: Request, res: Response): Promise<Response<BookModel[], Record<string, BookModel[]>>> {
    try {
      const allBooks = await this.allBooksLoader.load();
      return res.status(HTTP_STATUS.OK).json(BooksViewModel.mapCollection(allBooks));
    } catch (err) {
      const { statusCode, body } = handleError(err);
      return res.status(statusCode).json(body);
    }
  }
}
