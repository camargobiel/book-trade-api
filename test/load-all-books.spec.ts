import app from '../src/main/config/app';
import prisma from '../src/infra/prisma';
import request from 'supertest';

describe('GET /api/book', () => {
  describe('Success', () => {
    it('should return all books', async () => {
      jest.spyOn(prisma.book , 'findMany').mockResolvedValue(
        [{
          id: '56594797-0525-4d5e-b3c2-fa8fb8161510',
          title: 'Diário de um banana',
          ISBN: '9788498672220',
          description: 'O livro é sobre um menino chamado Greg Heffley e suas tentativas de se tornar popular.',
          page_count: 224,
          publish_date: new Date('2007-04-01T00:00:00'),
          cover: null
        }]
      );
      const response = await request(app).get('/api/books');
      expect(response.status).toBe(200);
      expect(response.body).toEqual([
        {
          id: '56594797-0525-4d5e-b3c2-fa8fb8161510',
          title: 'Diário de um banana',
          ISBN: '9788498672220',
          description: 'O livro é sobre um menino chamado Greg Heffley e suas tentativas de se tornar popular.',
          publishDate: '2007-04-01T03:00:00.000Z',
          pageCount: 224
        }
      ]);
    });

    it('should return empty if not have any books', async () => {
      jest.spyOn(prisma.book , 'findMany').mockResolvedValue([]);
      const response = await request(app).get('/api/books');
      expect(response.status).toBe(200);
      expect(response.body).toEqual([]);
    });
  });
});
