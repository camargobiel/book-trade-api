import { Book } from '@/domain/entities/book';

export class BooksViewModel {
  id: string;
  title: string;
  ISBN: string;
  description: string;
  pageNumber: number;
  publishDate: string;

  public static map(entity: Book): BooksViewModel {
    return {
      ...entity,
      publishDate: entity.publishDate.toISOString()
    };
  }

  public static mapCollection(entities: Book[]): BooksViewModel[] {
    return entities.map(entity => BooksViewModel.map(entity));
  }
}
