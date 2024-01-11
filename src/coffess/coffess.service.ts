import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffessService {
    private coffees: Coffee[] = [
        {
            id: 1,
            name: "Capucchino Coffee",
            brand: "Buddy Brew",
            flavors: ['Chocolate', 'Vanilla']
        },
        {
            id: 2,
            name: "Americano Coffee",
            brand: "Buddy Brew",
            flavors: ['Cinnamon', 'Strawbery']
        }
    ];
    findAll(){
        return this.coffees;
    }
    findOne(id: string){
        const coffee = this.coffees.find(item => item.id === +id); 
        if(!coffee){
            throw new HttpException(`Coffee Nº ${id} not found.`, HttpStatus.NOT_FOUND)
        }
        return coffee;
    }
    create(createCoffeeDto: any){
        this.coffees.push(createCoffeeDto);
        return this.coffees;
    }
    update(id: string, updateCoffeeDto: any){
        const existingCoffee = this.findOne(id);
        if(existingCoffee) {

        }
    }
    delete(id: string){
        const coffeeIndex = this.coffees.findIndex(item => item.id === +id);
        if(coffeeIndex >= 0){
            this.coffees.splice(coffeeIndex, 1);
        }
        return this.coffees;
    }
}
