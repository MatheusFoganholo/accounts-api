import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  CreateAccountController,
  DeleteAccountController,
  GetAllAccountsController,
  GetOneAccountController,
  UpdateAccountController,
} from './presentation/controllers';
import {
  CreateAccountService,
  DeleteAccountService,
  GetAllAccountsService,
  GetOneAccountService,
  UpdateAccountService,
} from './data';
import { Account, AccountSchema } from './infra';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }]),
  ],
  controllers: [
    CreateAccountController,
    DeleteAccountController,
    GetAllAccountsController,
    GetOneAccountController,
    UpdateAccountController,
  ],
  providers: [
    CreateAccountService,
    DeleteAccountService,
    GetAllAccountsService,
    GetOneAccountService,
    UpdateAccountService,
  ],
})
export class AccountsModule {}
