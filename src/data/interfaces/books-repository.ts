import { Book } from '@prisma/client';
import { CreateBookParams } from '@/data/dtos/create-book';

export interface IBooksRepository {
  createBook: (book: CreateBookParams) => Promise<Book>
  loadAllBooks: () => Promise<Book[]>
  loadBookById: (id: string) => Promise<Book>
}
