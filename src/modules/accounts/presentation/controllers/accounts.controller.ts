import {
  Controller,
  Body,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

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
  async create(
    @Body() createAccountModel: CreateAccountModel,
    @Res() response: Response,
  ) {
    const httpResponse = await this.createAccountService.execute(
      createAccountModel,
    );

    return response
      .status(
        httpResponse.error
          ? HttpStatus.UNPROCESSABLE_ENTITY
          : HttpStatus.CREATED,
      )
      .json(httpResponse);
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
