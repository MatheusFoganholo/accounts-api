import { Controller, Body, Param, Patch } from '@nestjs/common';
import { UpdateAccountService } from '../../data';
import { UpdateAccountDto } from '../dtos';

@Controller('accounts')
export class UpdateAccountController {
  constructor(private readonly updateAccountService: UpdateAccountService) {}

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto) {
    return this.updateAccountService.execute(id, updateAccountDto);
  }
}
