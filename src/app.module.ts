import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffessController } from './coffess/coffess.controller';

@Module({
  imports: [],
  controllers: [AppController, CoffessController],
  providers: [AppService],
})
export class AppModule {}
