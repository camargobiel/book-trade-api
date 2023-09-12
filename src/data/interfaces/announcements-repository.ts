import { Announcement } from '@/domain/entities/announcement';
import { CreateAnnouncementParams } from '@/domain/dtos';

export interface IAnnouncementsRepository {
  createAnnouncement: (announcement: CreateAnnouncementParams) => Promise<Announcement>;
}
