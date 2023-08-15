import { LoadAllBooksRepository } from '@/data/interfaces';
import { BookModel } from '@/data/models';

export class BookRepository implements LoadAllBooksRepository {
  async loadAllBooks(): Promise<BookModel[]> {
    // TODO: prisma
    return [
      {
        id: '1',
        title: 'title',
        description: 'description',
        ISBN: 'ISBN',
        pageNumber: 1,
        publishDate: new Date(),
      },
    ];
  }
}
