import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Account, AccountDocument } from '~/modules/accounts/infra';
import { AccountModel } from '~/modules/accounts/domain';
import { GetAllAccounts } from '~/modules/accounts/domain';

@Injectable()
export class GetAllAccountsService implements GetAllAccounts {
  constructor(
    @InjectModel(Account.name)
    private accountModel: Model<AccountDocument>,
  ) {}

  async execute(): Promise<AccountModel[]> {
    const accounts = await this.accountModel.find();
    return accounts;
  }
}
