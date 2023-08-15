export class BookError extends Error {
  constructor() {
    super('Book error');
    this.name = 'BookError';
  }
}
