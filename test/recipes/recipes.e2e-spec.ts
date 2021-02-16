import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';

import { AppModule } from '../../src/app.module'

describe('Auth', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should login using a valid user', async () => {
    return request(app.getHttpServer())
      .post('/graphql')
			.send({
				query: 'query{recipes{id}}',
			})
      .expect(200)
      .expect({ "recipes": [] });
  });

  afterAll(async () => {
    await app.close();
  });
});
