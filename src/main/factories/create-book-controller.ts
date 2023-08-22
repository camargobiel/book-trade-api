import { CreateBookService } from '@/data/services';
import { BooksRepository } from '@/infra/repositories';
import { CreateBookController } from '@/presentation/controllers';
import { Controller } from '@/presentation/interfaces';

export const makeCreateBookController = (): Controller => {
  const repository = new BooksRepository();
  const creator = new CreateBookService(repository);
  const controller = new CreateBookController(creator);
  return controller;
};
