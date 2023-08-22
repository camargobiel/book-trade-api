import { AllBooksLoaderService } from '@/data/services';
import { BookRepositoryMock } from '@/main/__mocks__/books-repository';

describe('AllBooksLoaderService Suites', () => {
  let sut: AllBooksLoaderService;

  describe('Success', () => {
    beforeEach(() => {
      sut = new AllBooksLoaderService(BookRepositoryMock);
    });

    it('should return a list of books', async () => {
      const mock = [
        {
          id: '56594797-0525-4d5e-b3c2-fa8fb8161510',
          title: 'Diário de um banana',
          ISBN: '9788498672220',
          description: 'O livro é sobre um menino chamado Greg Heffley e suas tentativas de se tornar popular.',
          pageNumber: 224,
          publishDate: new Date('2007-04-01T00:00:00'),
        }
      ];
      (BookRepositoryMock.loadAllBooks as jest.Mock).mockReturnValue(mock);
      const result = await sut.load();
      expect(result).toEqual([
        {
          id: '56594797-0525-4d5e-b3c2-fa8fb8161510',
          title: 'Diário de um banana',
          ISBN: '9788498672220',
          description: 'O livro é sobre um menino chamado Greg Heffley e suas tentativas de se tornar popular.',
          pageNumber: 224,
          publishDate: new Date('2007-04-01T00:00:00'),
        }
      ]);
    });

    it('should return an empty array if no books are found', async () => {
      const mock = [];
      (BookRepositoryMock.loadAllBooks as jest.Mock).mockReturnValue(mock);
      const result = await sut.load();
      expect(result).toEqual([]);
    });
  });
});
