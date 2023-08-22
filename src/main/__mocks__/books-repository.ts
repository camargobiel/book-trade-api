import { IBooksRepository } from '@/data/interfaces';

export const BookRepositoryMock: IBooksRepository = {
  createBook: jest.fn(),
  loadAllBooks: jest.fn(),
};
