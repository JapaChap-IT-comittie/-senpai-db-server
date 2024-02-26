import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  @ApiBody({
    type: CreateUserDto,
    examples: {
      example1: {
        summary: 'Example 1',
        description: 'A detailed description of the example',
        value: {
          name: 'string',
          major: 'string',
          company: 'string',
          industry: 'string',
          contact: 'string',
        },
      },
    },
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('findAll')
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Put('update/:id')
  @ApiBody({
    type: UpdateUserDto,
    examples: {
      example1: {
        summary: 'Example 1',
        description: 'A detailed description of the example',
        value: {
          name: 'string',
          major: 'string',
          company: 'string',
          industry: 'string',
          contact: 'string',
        },
      },
    },
  })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
