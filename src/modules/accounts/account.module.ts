import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Account, AccountSchema } from '~/modules/accounts/infra';
import { AccountsController } from '~/modules/accounts/presentation/controllers';
import {
  CreateAccountService,
  DeleteAccountService,
  GetAllAccountsService,
  GetOneAccountService,
  UpdateAccountService,
} from '~/modules/accounts/data';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }]),
  ],
  controllers: [AccountsController],
  providers: [
    CreateAccountService,
    DeleteAccountService,
    GetAllAccountsService,
    GetOneAccountService,
    UpdateAccountService,
  ],
})
export class AccountsModule {}
