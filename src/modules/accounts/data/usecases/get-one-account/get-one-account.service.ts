import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Account, AccountDocument } from '~/modules/accounts/infra';
import { AccountModel } from '~/modules/accounts/domain';
import { GetOneAccount } from '~/modules/accounts/domain';

@Injectable()
export class GetOneAccountService implements GetOneAccount {
  constructor(
    @InjectModel(Account.name)
    private accountModel: Model<AccountDocument>,
  ) {}

  async execute(id: string): Promise<AccountModel> {
    const account = await this.accountModel.findById(id);
    return account;
  }
}
