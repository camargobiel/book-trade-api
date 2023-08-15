import { Book } from '@/domain/entities/book';

export class BooksViewModel {
  id: string;
  title: string;
  ISBN: string;
  description: string;
  pageCount: number;
  publishDate: string;

  public static map(entity: Book): BooksViewModel {
    return {
      id: entity.id,
      title: entity.title,
      ISBN: entity.ISBN,
      description: entity.description,
      publishDate: entity.publish_date.toISOString(),
      pageCount: entity.page_count,
    };
  }

  public static mapCollection(entities: Book[]): BooksViewModel[] {
    return entities.map(entity => BooksViewModel.map(entity));
  }
}
