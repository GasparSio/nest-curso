import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, UsePipes, ValidationPipe } from '@nestjs/common';
import { CoffessService } from './coffess.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';

@UsePipes(ValidationPipe)
@Controller('coffees')
export class CoffessController {
    constructor(private readonly coffeesService: CoffessService){}
    @Get()
    findAll(@Query() paginationQuery: PaginationQueryDto){
        return this.coffeesService.findAll(paginationQuery);
    }
    @Get(':id')
    findOne(@Param('id') id: string){
        return this.coffeesService.findOne(id);
    }
    @Post()
    create(@Body() createCoffeeDto: CreateCoffeeDto){
        console.log(createCoffeeDto instanceof CreateCoffeeDto);
        return this.coffeesService.create(createCoffeeDto);
    }
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto){
        return this.coffeesService.update(id, updateCoffeeDto)
    }
    @Delete(':id')
    delete(@Param('id') id: string){
        return this.coffeesService.remove(id);
    }
}
