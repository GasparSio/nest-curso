import { Injectable } from '@nestjs/common';
import { CoffessService } from 'src/coffess/coffess.service';

@Injectable()
export class CoffeeRatingService {
    constructor(private readonly coffeesService: CoffessService){}
}
