import { Module } from '@nestjs/common';
import { CoffeeRatingService } from './coffee-rating.service';
import { CoffessModule } from 'src/coffess/coffess.module';

@Module({
  imports: [CoffessModule],
  providers: [CoffeeRatingService]
})
export class CoffeeRatingModule {}
