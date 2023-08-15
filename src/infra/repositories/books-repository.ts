import { IBooksRepository } from '@/data/interfaces';
import { BookModel } from '@/data/models';
import prisma from '@/infra/prisma';

export class BooksRepository implements IBooksRepository {
  async loadAllBooks(): Promise<BookModel[]> {
    return prisma.book.findMany();
  }
}
