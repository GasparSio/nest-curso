import { Module } from '@nestjs/common';
import { CoffessController } from './coffess.controller';
import { CoffessService } from './coffess.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Coffee])],
    controllers: [CoffessController],
    providers: [CoffessService]
})
export class CoffessModule {}
