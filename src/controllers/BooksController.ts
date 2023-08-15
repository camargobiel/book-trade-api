import { IController } from '../ports/IController';

export class BooksController implements IController {
  handle = (req, res) => {
    res.send('Hello from books');
  };
}
