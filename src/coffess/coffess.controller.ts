import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req } from '@nestjs/common';
import { CoffessService } from './coffess.service';

@Controller('coffees')
export class CoffessController {
    constructor(private readonly coffeesService: CoffessService){}
    @Get()
    findAll(@Query() paginationQuery){
        return this.coffeesService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id: string){
        return this.coffeesService.findOne(id);
    }
    @Post()
    create(@Body() body){
        return this.coffeesService.create(body);
    }
    @Patch(':id')
    update(@Param('id') id: string, @Body() body){
        return this.coffeesService.update(id, body)
    }
    @Delete(':id')
    delete(@Param('id') id: string){
        return this.coffeesService.delete(id);
    }
}
