import { Book } from '@/domain/entities/book';
import { AllBooksLoader } from '@/domain/usecases';
import { IBooksRepository } from '@/data/interfaces';

export class AllBooksLoaderService implements AllBooksLoader {
  constructor(
    private readonly loadAllBooksRepository: IBooksRepository
  ) {}

  async load(): Promise<Book[]> {
    const allBooks = this.loadAllBooksRepository.loadAllBooks();
    return allBooks;
  }
}
