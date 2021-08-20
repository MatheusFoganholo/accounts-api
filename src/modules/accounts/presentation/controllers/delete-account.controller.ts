import { Controller, Delete, Param } from '@nestjs/common';
import { DeleteAccountService } from '../../data/usecases';

@Controller('accounts')
export class DeleteAccountController {
  constructor(private readonly deleteAccountsService: DeleteAccountService) {}

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deleteAccountsService.execute(id);
  }
}
