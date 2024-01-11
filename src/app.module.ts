import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffessModule } from './coffess/coffess.module';

@Module({
  imports: [CoffessModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
