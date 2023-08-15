
import { makeLoadAllBooksController } from '@/main/factories';
import { adaptRoute } from '@/main/adapters';

import { Router } from 'express';

export default (router: Router): void => {
  router.get('/books', adaptRoute(makeLoadAllBooksController()));
};
