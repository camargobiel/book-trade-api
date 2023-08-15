import { BookModel } from '../../../data/models';
import { IBooksRepository } from '../../../data/interfaces/books-repository';

export class InMemoryBooksRepository implements IBooksRepository {
  async loadAllBooks(): Promise<BookModel[]> {
    return [
      {
        id: '56594797-0525-4d5e-b3c2-fa8fb8161510',
        title: 'Diário de um banana',
        ISBN: '9788498672220',
        description: 'O livro é sobre um menino chamado Greg Heffley e suas tentativas de se tornar popular.',
        page_count: 224,
        publish_date: new Date('2007-04-01T00:00:00'),
      }
    ];
  }
}
