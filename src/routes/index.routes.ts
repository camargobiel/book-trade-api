import { Router } from 'express';
import { BooksController } from '../controllers/BooksController';

const router = Router();

const booksController = new BooksController();

router.route('/books').get(booksController.handle);

export default router;
