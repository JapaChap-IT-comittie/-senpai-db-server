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
import { LoginDto } from './dto/login-dto';

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
          username: 'string',
          password: 'string',
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

  @Get('find/:id')
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

  @Post('login')
  @ApiBody({
    type: CreateUserDto,
    examples: {
      example1: {
        summary: 'Example 1',
        description: 'A detailed description of the example',
        value: {
          username: 'string',
          password: 'string',
        },
      },
    },
  })
  async login(@Body() loginDto: LoginDto) {
    const user = await this.userService.validateUser(
      loginDto.username,
      loginDto.password,
    );
    if (!user) {
      return false;
    }
    // Implement any post-login logic here (like generating JWT tokens)
    return true;
  }
}
