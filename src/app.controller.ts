import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { AppService } from './app.service';
import { CreateUserDto } from "./dto/create.user.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
  async getUsers() {
    return await this.appService.getUsers();
  }

  @Get('user/:id')
  async getUser(@Param('id') id: number) {
    return await this.appService.getUserByID(id);
  }

  @Post('create')
  async createUser(@Body() dto: CreateUserDto) {
    return await this.appService.createUser(dto);
  }

  @Put('user/:id')
  async updateUser(@Param('id') id: number,
             @Body() dto: CreateUserDto) {
    return await this.appService.patchUser(id, dto);
  }

  @Delete('user/:id')
  async deleteUser(@Param('id') id: number) {
    return await this.appService.deleteUser(id);
  }
}
