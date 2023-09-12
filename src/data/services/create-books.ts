import { IBooksRepository } from '@/data/interfaces';
import { BookModel } from '../models';
import { CreateBook } from '@/domain/usecases';
import { CreateBookParams } from '@/data/dtos/create-book';

export class CreateBookService implements CreateBook {
  constructor(
    private readonly booksRepository: IBooksRepository,
  ) {}

  async createBook(book: CreateBookParams): Promise<BookModel> {
    return this.booksRepository.createBook(book);
  }
}
