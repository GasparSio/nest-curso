import { Test, TestingModule } from '@nestjs/testing';
import { CoffessService } from './coffess.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Flavor } from './entities/flavor.entity.ts';
import { Coffee } from './entities/coffee.entity';

describe('CoffessService', () => {
  let service: CoffessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CoffessService,
        {provide: getRepositoryToken(Flavor), useValue: {}},
        {provide: getRepositoryToken(Coffee), useValue: {}},
      ],
    }).compile();

    service = module.get<CoffessService>(CoffessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
