import { BookModel } from '@/data/models';

export interface LoadAllBooksRepository {
  loadAllBooks: () => Promise<BookModel[]>
}
