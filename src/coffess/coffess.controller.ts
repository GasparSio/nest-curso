import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req } from '@nestjs/common';
import { CoffessService } from './coffess.service';

@Controller('coffess')
export class CoffessController {
    constructor(private readonly coffeesService: CoffessService){}
    @Get()
    findAll(@Query() paginationQuery){
        // const { limit, offset } = paginationQuery;
        return this.coffeesService.findAll();
        // return `This action returns all coffess. Limit = ${limit}. Offset = ${offset}`;
    }
    @Get(':id')
    findOne(@Param('id') id: string){
        return this.coffeesService.findOne(id);
        // return `This action returns the ${id}`
    }
    @Post()
    create(@Body() body){
        return this.coffeesService.create(body);
        // return body;
    }
    @Patch(':id')
    update(@Param('id') id: string, @Body() body){
        return this.coffeesService.update(id, body)
        // return `This action update the item with the ID: ${id}`
    }
    @Delete(':id')
    delete(@Param('id') id: string){
        return this.coffeesService.delete(id);
        // return `This action delete the item with the ID: ${id}`
    }
}
