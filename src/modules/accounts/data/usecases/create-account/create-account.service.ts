import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Account, AccountDocument } from '~/modules/accounts/infra';
import { AccountModel } from '~/modules/accounts/domain';
import { CreateAccount, CreateAccountModel } from '~/modules/accounts/domain';

@Injectable()
export class CreateAccountService implements CreateAccount {
  constructor(
    @InjectModel(Account.name)
    private accountModel: Model<AccountDocument>,
  ) {}

  async execute(createAccountModel: CreateAccountModel): Promise<AccountModel> {
    const account = await this.accountModel.create(createAccountModel);
    return account;
  }
}
