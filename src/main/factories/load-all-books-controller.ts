import { AllBooksLoaderService } from '@/data/services';
import { BookRepository } from '@/infra/repositories';
import { LoadAllBooksController } from '@/presentation/controllers';
import { Controller } from '@/presentation/interfaces';

export const makeLoadAllBooksController = (): Controller => {
  const repository = new BookRepository();
  const loader = new AllBooksLoaderService(repository);
  const controller = new LoadAllBooksController(loader);

  return controller;
};
