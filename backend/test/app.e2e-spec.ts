import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { AppModule } from './../src/app.module';

const request = require('supertest');

describe('Tasks (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    app.setGlobalPrefix('api');

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );

    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('POST /api/tasks - should create a task', async () => {
    const response = await request(app.getHttpServer())
      .post('/api/tasks')
      .send({
        title: 'Test Task',
        description: 'Testing creation',
        assignee: 'Said',
        dueDate: '2026-04-20',
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.title).toBe('Test Task');
    expect(response.body.assignee).toBe('Said');
    expect(response.body.status).toBe('TODO');
  });
});