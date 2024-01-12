import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCoffeeDto } from './dto/create-coffee.dto';

@Injectable()
export class CoffessService {
    constructor(
        @InjectRepository(Coffee)
        private readonly coffeeRepository: Repository<Coffee>,
    ){}

    findAll(){
        return this.coffeeRepository.find({
            relations: ['flavors']
        });
    }
    async findOne(id: any){
        const coffee = await this.coffeeRepository.findOne({
            where: { id },
            relations: ['flavors']
        });
        if(!coffee){
            throw new NotFoundException(`Coffee Nº ${id} not found.`)
        }
        return coffee;
    }
    create(createCoffeeDto: CreateCoffeeDto){
        const coffee = this.coffeeRepository.create(createCoffeeDto);
        return this.coffeeRepository.save(coffee);
    }
    async update(id: string, updateCoffeeDto: any){
        const coffee = await this.coffeeRepository.preload({
            id: +id,
            ...updateCoffeeDto,
        })
        if(!coffee) {
            throw new NotFoundException(`Coffee Nº ${id} not found.`)
        }
        return this.coffeeRepository.save(coffee);
    }
    async remove(id: string){
        const coffee = await this.findOne(id);
        return this.coffeeRepository.remove(coffee);
    }
}
