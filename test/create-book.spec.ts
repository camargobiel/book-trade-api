import prisma from '../src/infra/prisma';
import request from 'supertest';
import app from '../src/main/config/app';

describe('POST /books', () => {
  describe('Success', () => {
    it('should return 201 if book is created', async () => {
      jest.spyOn(prisma.book , 'create').mockResolvedValue(
        {
          id: '56594797-0525-4d5e-b3c2-fa8fb8161510',
          title: 'Diário de um banana',
          ISBN: '9788498672220',
          description: 'O livro é sobre um menino chamado Greg Heffley e suas tentativas de se tornar popular.',
          page_count: 224,
          publish_date: new Date('2007-04-01T00:00:00'),
          cover: null
        }
      );

      const response = await request(app).post('/api/books').send(
        {
          title: 'Diário de um banana',
          ISBN: '9788498672220',
          description: 'O livro é sobre um menino chamado Greg Heffley e suas tentativas de se tornar popular.',
          pageCount: 224,
          publishDate: new Date('2007-04-01T00:00:00'),
        }
      );

      expect(response.status).toBe(201);
      expect(response.body).toEqual(
        {
          id: '56594797-0525-4d5e-b3c2-fa8fb8161510',
          title: 'Diário de um banana',
          ISBN: '9788498672220',
          description: 'O livro é sobre um menino chamado Greg Heffley e suas tentativas de se tornar popular.',
          page_count: 224,
          publish_date: '2007-04-01T03:00:00.000Z',
          cover: null
        }
      );
    });
  });
});
