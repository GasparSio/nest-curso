import { Test, TestingModule } from '@nestjs/testing';
import { CoffessController } from './coffess.controller';

describe('CoffessController', () => {
  let controller: CoffessController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoffessController],
    }).compile();

    controller = module.get<CoffessController>(CoffessController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
