import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountsController } from './presentation/controllers';
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
