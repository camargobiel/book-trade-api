import { IBooksRepository } from '@/data/interfaces';
import prisma from '@/infra/prisma';
import { Book } from '@prisma/client';

export class BooksRepository implements IBooksRepository {
  async createBook(book: Book): Promise<Book> {
    return prisma.book.create({
      data: {
        ...book
      }
    });
  }
  async loadAllBooks(): Promise<Book[]> {
    return prisma.book.findMany();
  }
}
