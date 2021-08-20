import { Controller, Body, Post } from '@nestjs/common';
import { CreateAccountService } from '../../data';
import { CreateAccountDto } from '../dtos';

@Controller('accounts')
export class CreateAccountController {
  constructor(private readonly createAccountService: CreateAccountService) {}

  @Post()
  create(@Body() createAccountDto: CreateAccountDto) {
    return this.createAccountService.execute(createAccountDto);
  }
}
