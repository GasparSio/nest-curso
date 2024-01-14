import { Test, TestingModule } from '@nestjs/testing';
import { CoffessService } from './coffess.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Flavor } from './entities/flavor.entity.ts';
import { Coffee } from './entities/coffee.entity';
import { Repository } from 'typeorm';



type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;
const createMockRepository = <T = any>(): MockRepository<T> => ({
  findOne: jest.fn(),
  create: jest.fn(),
})

describe('CoffessService', () => {
  let service: CoffessService;
  let coffeeRepository: MockRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CoffessService,
        {provide: getRepositoryToken(Flavor), useValue: createMockRepository()},
        {provide: getRepositoryToken(Coffee), useValue: createMockRepository()},
      ],
    }).compile();

    service = module.get<CoffessService>(CoffessService);
    coffeeRepository = module.get<MockRepository>(getRepositoryToken(Coffee));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  
  describe('findOne', () => { 
    describe('when coffee with ID exists', () => {
      it('should return the coffee object', async () => {
        const coffeeId = '1';
        const expectedCoffee = {};
        
        coffeeRepository.findOne.mockReturnValue(expectedCoffee);
        const coffee = await service.findOne(coffeeId);
        expect(coffee).toEqual(expectedCoffee);
      })
    })
    describe('otherwise', () => {
      it('should throw the "NotFoundException"', () => {
  
      })
    })
  })


});

