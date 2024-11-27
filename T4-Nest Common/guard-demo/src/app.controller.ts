/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from 'src/role.guard';
class CreateCatDto {

  name: string;
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
  constructor() { }

  @Post()
  @UseGuards(AuthGuard)
  async create(@Body() createCatDto: CreateCatDto) {

    return createCatDto;
  }

}
