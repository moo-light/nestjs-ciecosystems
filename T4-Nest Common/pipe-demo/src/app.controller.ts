/* eslint-disable prettier/prettier */
import { Body, Controller, Get, HttpStatus, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { IsNumberString } from 'class-validator';
class CreateCatDto {

  name: string;
  @IsNumberString() // throw when value is not a number as string 
  age: number;
  breed: string;
}
const cat: CreateCatDto = {
  name: 'kitty',
  age: 3,
  breed: 'persian'
};
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return createCatDto;
  }

  /**
   * Retrieves a single item by its ID.
   *
   * @param id - The ID of the item to retrieve. This parameter is parsed as an integer and will return a 406 Not Acceptable status code if the parsing fails.
   * @returns An object containing the ID and the corresponding item details.
   */
  @Get(':id')
  async findOne(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
    id: number,
  ) {
    return { id, ...cat };
  }
}

