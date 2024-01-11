import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Req, Res } from '@nestjs/common';

@Controller('coffess')
export class CoffessController {
    @Get()
    findAll(@Res() response){
        response.status(200).send('This action returns all coffess');
    }
    @Get(':id')
    findOne(@Param('id') id: string){
        return `This action returns the ${id}`
    }
    @Post()
    @HttpCode(HttpStatus.GONE)
    create(@Body() body){
        return body;
    }
}
