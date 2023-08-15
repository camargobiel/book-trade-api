import { LoadAllBooksRepository } from '@/data/interfaces';
import { BookModel } from '@/data/models';

export class BookRepository implements LoadAllBooksRepository {
  async loadAllBooks(): Promise<BookModel[]> {
    // TODO: prisma
    return [
      {
        id: '1',
        title: 'title',
        editor: 'editor',
        picture: 'picture',
        authors: ['author1', 'author2'],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
  }
}
