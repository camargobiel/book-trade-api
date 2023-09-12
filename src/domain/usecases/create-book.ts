import { Book } from '@/domain/entities/book';

export interface CreateBook {
  createBook: (book: Omit<Book, 'id'>) => Promise<Book>;
}
