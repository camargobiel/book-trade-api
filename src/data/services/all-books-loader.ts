import { Book } from '@/domain/entities/book';
import { AllBooksLoader } from '@/domain/usecases';
import { LoadAllBooksRepository } from '@/data/interfaces';
import { BookError } from '@/domain/errors';

export class AllBooksLoaderService implements AllBooksLoader {
  constructor(
    private readonly loadAllBooksRepository: LoadAllBooksRepository
  ) {}

  async load(): Promise<Book[]> {
    if (!this.loadAllBooksRepository) throw new BookError;

    return this.loadAllBooksRepository.loadAllBooks();
  }
}
