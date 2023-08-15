import { BookModel } from '@/data/models';

export interface IBooksRepository {
  loadAllBooks: () => Promise<BookModel[]>
}
