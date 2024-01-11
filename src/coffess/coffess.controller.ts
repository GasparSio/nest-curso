import { Body, Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';

@Controller('coffess')
export class CoffessController {
    @Get()
    findAll(){
        return 'This action returns all coffess';
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
