export type Book = {
  id: string;
  title: string;
  description: string;
  ISBN: string;
  page_count: number;
  publish_date?: Date;
  cover?: string;
}
