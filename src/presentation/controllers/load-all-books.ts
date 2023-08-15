import { AllBooksLoader } from '@/domain/usecases';
import { HTTPResponse, serverError, ok, ErrorStack } from '@/presentation/interfaces';
import { Controller } from '@/presentation/interfaces/controller';
import { BooksViewModel } from '@/presentation/view-models';

export class LoadAllBooksController implements Controller {
  constructor(
    private readonly allBooksLoader: AllBooksLoader
  ) {}

  async handle (req: unknown, res: unknown): Promise<
    HTTPResponse<BooksViewModel[] | ErrorStack>
  > {
    console.log('res', res);
    console.log('req', req);

    try {
      const allBooks = await this.allBooksLoader.load();
      return ok(BooksViewModel.mapCollection(allBooks));
    } catch (err) {
      return serverError(err as Error);
    }
  }
}
