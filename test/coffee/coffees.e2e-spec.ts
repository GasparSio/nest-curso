import { HttpStatus, INestApplication, ValidationPipe } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing"
import { TypeOrmModule } from "@nestjs/typeorm";
import { CoffessModule } from "src/coffess/coffess.module";
import { CreateCoffeeDto } from "src/coffess/dto/create-coffee.dto";
import * as request from 'supertest';

describe('[Feature] Coffees - /coffees', () => {
    const coffee = {
        name: 'Capucchino Grande',
        brand: 'Mexican coffee',
        flavors: ['Chocolate', 'Vanilla']
    };
    let app: INestApplication;

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [
                CoffessModule,
                TypeOrmModule.forRoot({
                    type: 'postgres',
                    host: 'localhost',
                    port: 5433,
                    username: 'postgres',
                    password: 'pass123',
                    database: 'postgres',
                    autoLoadEntities: true,
                    synchronize: true
                })
            ],
        }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
    forbidNonWhitelisted: true,
    transformOptions: {
      enableImplicitConversion: true,
    }
  }))
    await app.init();
    })

    it('Create [POST /]', () => {
        return request(app.getHttpServer())
        .post('/coffees')
        .send(coffee as CreateCoffeeDto)
        .expect(HttpStatus.CREATED)
    });
    
    it.todo('Get all [GET /]');
    it.todo('Get one [GET /:id]');
    it.todo('Update one [PATCH /:id]');
    it.todo('Delete one [Delete /:id]');

    afterAll(async () => {
        await app.close();
    })
})