import { Module } from '@nestjs/common';
import { CoffessController } from './coffess.controller';
import { CoffessService } from './coffess.service';

@Module({
    controllers: [CoffessController],
    providers: [CoffessService]
})
export class CoffessModule {}
