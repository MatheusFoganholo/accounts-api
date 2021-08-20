import { Controller, Get } from '@nestjs/common';
import { GetAllAccountsService } from '../../data/usecases';

@Controller('accounts')
export class GetAllAccountsController {
  constructor(private readonly getAllAccountsService: GetAllAccountsService) {}

  @Get()
  findAll() {
    return this.getAllAccountsService.execute();
  }
}
