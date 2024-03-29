import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { Flavor } from './entities/flavor.entity.ts';
import { PaginationQueryDto } from 'src/common/dto/pagination-query/pagination-query.dto';
import { of } from 'rxjs';

@Injectable()
export class CoffessService {
    constructor(
        @InjectRepository(Coffee)
        private readonly coffeeRepository: Repository<Coffee>,
        @InjectRepository(Flavor)
        private readonly flavorRepository: Repository<Flavor>,

    ){}

    findAll(paginationQuery: PaginationQueryDto){
        const { limit, offset } = paginationQuery; 
        return this.coffeeRepository.find({
            relations: ['flavors'],
            take: limit,
            skip: offset,
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
    async create(createCoffeeDto: CreateCoffeeDto){
        const flavors = await Promise.all(
            createCoffeeDto.flavors.map(name => this.preloadFlavorByName(name))
        )
        const coffee = this.coffeeRepository.create({
            ...createCoffeeDto,
            flavors,
        });
        return this.coffeeRepository.save(coffee);
    }
    async update(id: string, updateCoffeeDto: any){
        const flavors = 
        updateCoffeeDto.flavors && 
        (await Promise.all(
            updateCoffeeDto.flavors.map(name => this.preloadFlavorByName(name))
        ));
        const coffee = await this.coffeeRepository.preload({
            id: +id,
            ...updateCoffeeDto,
            flavors
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
    private async preloadFlavorByName(name: string): Promise<Flavor>{
        const existingFlavor = await this.flavorRepository.findOne({where: {name}})
        if(existingFlavor){
            return existingFlavor;
        }
        return this.flavorRepository.create({name});
    }
}
