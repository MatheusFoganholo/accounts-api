import { Controller, Get, Param } from '@nestjs/common';
import { GetOneAccountService } from '../../data/usecases';

@Controller('accounts')
export class GetOneAccountController {
  constructor(private readonly getOneAccountsService: GetOneAccountService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.getOneAccountsService.execute(id);
  }
}
