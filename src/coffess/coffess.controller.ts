import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req } from '@nestjs/common';

@Controller('coffess')
export class CoffessController {
    @Get()
    findAll(@Query() paginationQuery){
        const { limit, offset } = paginationQuery;
        return `This action returns all coffess. Limit = ${limit}. Offset = ${offset}`;
    }
    @Get(':id')
    findOne(@Param('id') id: string){
        return `This action returns the ${id}`
    }
    @Post()
    create(@Body() body){
        return body;
    }
    @Patch(':id')
    update(@Param('id') id: string, @Body() body){
        return `This action update the item with the ID: ${id}`
    }
    @Delete(':id')
    delete(@Param('id') id: string){
        return `This action delete the item with the ID: ${id}`
    }
}
