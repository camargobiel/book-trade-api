import { LoadAllBooksRepository } from '@/data/interfaces';
import { BookModel } from '@/data/models';

export class BookRepository implements LoadAllBooksRepository {
  async loadAllBooks(): Promise<BookModel[]> {

  }
}
