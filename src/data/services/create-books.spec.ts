import { CreateBookParams } from '@/domain/dtos';
import { CreateBookService } from '.';
import { BooksRepositoryMock } from '@/infra/jest/__mocks__';

describe('CreateBooksService Suites', () => {
  let sut: CreateBookService;

  describe('Success', () => {
    beforeEach(() => {
      sut = new CreateBookService(BooksRepositoryMock);
    });

    it('should create a book passing the correct params', async () => {
      const mock: CreateBookParams = {
        title: '1984',
        description: 'This is a very good book!',
        ISBN: '978-0451524935',
        page_count: 244,
        publish_date: new Date(),
        cover: 'https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg',
      };
      (BooksRepositoryMock.createBook as jest.Mock).mockResolvedValue({
        id: 'adef9e26-e392-4b41-8349-736728473333',
        ...mock
      });
      const result = await sut.createBook(mock);
      expect(BooksRepositoryMock.createBook).toBeCalledTimes(1);
      expect(result).toEqual({
        id: expect.any(String),
        ...mock
      });
    });
  });
});
