import { IAnnouncementsRepository } from '@/data/interfaces/announcements-repository';

export const AnnouncementsRepositoryMock: IAnnouncementsRepository = {
  createAnnouncement: jest.fn(),
};
