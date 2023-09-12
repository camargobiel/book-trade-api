import { CreateAnnouncementParams } from '@/domain/dtos';
import { Announcement } from '@/domain/entities';

export interface CreateAnnouncement {
  createAnnouncement: (announcement: CreateAnnouncementParams) => Promise<Announcement>;
}
