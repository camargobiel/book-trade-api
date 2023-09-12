import { AnnouncementsRepositoryMock, BooksRepositoryMock } from '@/infra/jest/__mocks__';
import { CreateAnnouncementService } from '.';
import { BookNotFoundError } from '@/data/errors';

describe('Create Announcement Suites', () => {
  let sut: CreateAnnouncementService;

  describe('Success', () => {
    beforeEach(() => {
      sut = new CreateAnnouncementService(
        AnnouncementsRepositoryMock,
        BooksRepositoryMock,
      );
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should create an announcement', async () => {
      (AnnouncementsRepositoryMock.createAnnouncement as jest.Mock).mockResolvedValue({
        id: '3a4242de-e07b-4bab-87ed-880ad56e1020',
        title: 'i want to sell this book',
        description: 'this book is very good!',
        book_id: 'f3f99ca8-c04e-4452-ae54-dd652e34c10e',
        user_id: 'c437704e-e67b-4150-aa07-7b374b41af29',
        created_at: new Date(),
        updated_at: new Date(),
      });
      (BooksRepositoryMock.loadBookById as jest.Mock).mockResolvedValue({
        id: '1eaa74bd-51f6-43b4-87b7-3b7087492a59',
        title: '1984',
      });
      const createdAnnouncement = await sut.createAnnouncement({
        title: 'i want to sell this book',
        description: 'this book is very good!',
        bookId: 'f3f99ca8-c04e-4452-ae54-dd652e34c10e',
        userId: 'c437704e-e67b-4150-aa07-7b374b41af29'
      });
      expect(createdAnnouncement).toEqual({
        id: '3a4242de-e07b-4bab-87ed-880ad56e1020',
        title: 'i want to sell this book',
        description: 'this book is very good!',
        book_id: 'f3f99ca8-c04e-4452-ae54-dd652e34c10e',
        user_id: 'c437704e-e67b-4150-aa07-7b374b41af29',
        created_at: expect.any(Date),
        updated_at: expect.any(Date),
      });
    });
  });

  describe('Errors', () => {
    beforeEach(() => {
      sut = new CreateAnnouncementService(
        AnnouncementsRepositoryMock,
        BooksRepositoryMock,
      );
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should throw error if send a non-existent book_id', async () => {
      (BooksRepositoryMock.loadBookById as jest.Mock).mockResolvedValue(null);
      const createdAnnouncement = sut.createAnnouncement({
        title: 'i want to sell this book',
        description: 'this book is very good!',
        bookId: 'this book id not exist',
        userId: 'c437704e-e67b-4150-aa07-7b374b41af29'
      });
      await expect(createdAnnouncement).rejects.toThrowError(BookNotFoundError);
    });
  });
});
