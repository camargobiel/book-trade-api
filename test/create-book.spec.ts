import prisma from '../src/infra/prisma';
import request from 'supertest';
import app from '../src/main/config/app';

describe('POST /books', () => {
  describe('Success calls', () => {
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

  describe('Errors calls', () => {
    describe('Bad request', () => {
      describe('title', () => {
        it('should throw if title is not provided', async () => {
          const response = await request(app).post('/api/books').send(
            {
              ISBN: '9788498672220',
              description: 'O livro é sobre um menino chamado Greg Heffley e suas tentativas de se tornar popular.',
              pageCount: 224,
              publishDate: new Date('2007-04-01T00:00:00'),
            }
          );

          expect(response.status).toBe(400);
          expect(response.body).toEqual([
            {
              message: 'title is required',
            }
          ]);
        });

        it('should throw if title length is bigger than 500', async () => {
          const response = await request(app).post('/api/books').send(
            {
              title: 'A'.repeat(501),
              ISBN: '9788498672220',
              description: 'O livro é sobre um menino chamado Greg Heffley e suas tentativas de se tornar popular.',
              pageCount: 224,
              publishDate: new Date('2007-04-01T00:00:00'),
            }
          );

          expect(response.status).toBe(400);
          expect(response.body).toEqual([
            {
              message: 'title length must be less than 500',
            }
          ]);
        });
      });

      describe('ISBN', () => {
        it ('should throw if ISBN is not provided', async () => {
          const response = await request(app).post('/api/books').send(
            {
              title: 'Diário de um banana',
              description: 'O livro é sobre um menino chamado Greg Heffley e suas tentativas de se tornar popular.',
              pageCount: 224,
              publishDate: new Date('2007-04-01T00:00:00'),
            }
          );

          expect(response.status).toBe(400);
          expect(response.body).toEqual([
            {
              message: 'ISBN is required',
            },
            {
              message: 'ISBN must be a valid ISBN',
            }
          ]);
        });

        it ('should throw if ISBN is invalid', async () => {
          const response = await request(app).post('/api/books').send(
            {
              title: 'Diário de um banana',
              ISBN: '1234567890123',
              description: 'O livro é sobre um menino chamado Greg Heffley e suas tentativas de se tornar popular.',
              pageCount: 224,
              publishDate: new Date('2007-04-01T00:00:00'),
            }
          );

          expect(response.status).toBe(400);
          expect(response.body).toEqual([
            {
              message: 'ISBN must be a valid ISBN',
            }
          ]);
        });
      });
    });
  });
});
