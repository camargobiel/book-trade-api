export class BookNotFoundError extends Error {
  constructor() {
    super('book not found');
    this.name = 'BookNotFoundError';
  }
}
