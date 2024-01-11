import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffessController } from './coffess/coffess.controller';
import { CoffessService } from './coffess/coffess.service';

@Module({
  imports: [],
  controllers: [AppController, CoffessController],
  providers: [AppService, CoffessService],
})
export class AppModule {}
