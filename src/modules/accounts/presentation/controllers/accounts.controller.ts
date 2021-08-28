import {
  Controller,
  Body,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import {
  CreateAccountModel,
  UpdateAccountModel,
} from '~/modules/accounts/domain';
import {
  CreateAccountService,
  DeleteAccountService,
  GetAllAccountsService,
  GetOneAccountService,
  UpdateAccountService,
} from '~/modules/accounts/data';

@Controller('accounts')
export class AccountsController {
  constructor(
    private readonly createAccountService: CreateAccountService,
    private readonly deleteAccountsService: DeleteAccountService,
    private readonly getAllAccountsService: GetAllAccountsService,
    private readonly getOneAccountsService: GetOneAccountService,
    private readonly updateAccountService: UpdateAccountService,
  ) {}

  @Get()
  findAll() {
    return this.getAllAccountsService.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.getOneAccountsService.execute(id);
  }

  @Post()
  create(@Body() createAccountModel: CreateAccountModel) {
    return this.createAccountService.execute(createAccountModel);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccountModel: UpdateAccountModel,
  ) {
    return this.updateAccountService.execute(id, updateAccountModel);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deleteAccountsService.execute(id);
  }
}
