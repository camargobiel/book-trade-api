import { CreateBookParams, IBooksRepository } from '@/data/interfaces';
import { BookModel } from '../models';

export class CreateBookService {
  constructor(
    private readonly booksRepository: IBooksRepository,
  ) {}

  async createBook(book: CreateBookParams): Promise<BookModel> {
    return this.booksRepository.createBook(book);
  }
}
