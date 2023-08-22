
import { makeLoadAllBooksController, makeCreateBookController } from '@/main/factories';
import { adaptRoute } from '@/main/adapters';

import { Router } from 'express';
import { createBookValidator } from '../validators';

export default (router: Router): void => {
  router
    .get('/books', adaptRoute(makeLoadAllBooksController()))
    .post('/books',
      createBookValidator.body,
      createBookValidator.validateOrThrow(),
      adaptRoute(makeCreateBookController()),
    );
};
