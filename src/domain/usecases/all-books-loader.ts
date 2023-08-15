import { Book } from '@/domain/entities/book';

export interface AllBooksLoader {
  load: () => Promise<Book[]>
}
