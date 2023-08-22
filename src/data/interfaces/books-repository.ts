import { Book } from '@prisma/client';
import { BookModel } from '../models';

export type CreateBookParams = Omit<BookModel, 'id'>

export interface IBooksRepository {
  loadAllBooks: () => Promise<Book[]>
  createBook: (book: CreateBookParams) => Promise<Book>
}
