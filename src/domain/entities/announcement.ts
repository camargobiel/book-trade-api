import { AnnouncementStatus } from '../enums';

export class Announcement {
  id: string;
  title: string;
  status: AnnouncementStatus;
  description: string;
  created_at: Date;
  updated_at: Date;
  book_id: string;
  user_id: string;

  constructor(params: Announcement) {
    Object.assign(this, params);
  }
}
