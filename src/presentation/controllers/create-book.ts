import { CreateBook } from '@/domain/usecases/create-book';
import { Controller } from '@/presentation/interfaces';
import { Request, Response } from 'express';
import { handleError } from '@/presentation/errors';
import { Book } from '@/domain/entities/book';
import { HTTP_STATUS } from '@/presentation/constants';
import { BooksViewModel } from '../view-models';

export class CreateBookController implements Controller<Book> {
  constructor(
    private readonly createBookService: CreateBook
  ) {}

  async handle (req: Request, res: Response): Promise<Response<Book, Record<string, Book>>> {
    try {
      const createdBook = await this.createBookService.createBook(req.body);
      const booksViewModel = BooksViewModel.map(createdBook);
      return res.status(HTTP_STATUS.CREATED).json(booksViewModel);
    } catch (error) {
      const { statusCode, body } = handleError(error);
      return res.status(statusCode).json(body);
    }
  }
}
