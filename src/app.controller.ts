import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { ok } from 'assert';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getUser() {
    return 'OK';
  }
  @Get(':id')
  getOneUser(@Param('id') id) {
    return 'OK';
  }
  @Post()
  postUser(@Body() body) {
    return 'OK';
  }
  @Put(':id')
  putUser(@Body() body, @Param('id') id) {
    return 'OK';
  }
  @Delete(':id')
  deleteUser(@Param('id') id) {
    return 'OK';
  }
}
