import { Module } from '@nestjs/common';
import { CoffessController } from './coffess.controller';
import { CoffessService } from './coffess.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity.ts';

@Module({
    imports: [TypeOrmModule.forFeature([Coffee, Flavor])],
    controllers: [CoffessController],
    providers: [CoffessService],
    exports: [CoffessService]
})
export class CoffessModule {}
