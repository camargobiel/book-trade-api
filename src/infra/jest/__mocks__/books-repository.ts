import { IBooksRepository } from '@/data/interfaces';

export const BooksRepositoryMock: IBooksRepository = {
  createBook: jest.fn(),
  loadAllBooks: jest.fn(),
  loadBookById: jest.fn(),
};
