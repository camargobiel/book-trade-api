import { CreateAnnouncement } from '@/domain/usecases';
import { Announcement } from '@/domain/entities';
import { CreateAnnouncementParams } from '@/domain/dtos';
import { IAnnouncementsRepository, IBooksRepository } from '@/data/interfaces';
import { BookNotFoundError } from '@/data/errors';

export class CreateAnnouncementService implements CreateAnnouncement {
  constructor(
    private readonly announcementsRepository: IAnnouncementsRepository,
    private readonly booksRepository: IBooksRepository
  ) {}
  createAnnouncement = async (announcement: CreateAnnouncementParams): Promise<Announcement> => {
    const book = await this.booksRepository.loadBookById(announcement.bookId);
    if (!book) {
      throw new BookNotFoundError();
    }
    const createdAnnouncement = await this.announcementsRepository.createAnnouncement(announcement);
    return createdAnnouncement;
  };
}
