import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Account, AccountDocument } from '~/modules/accounts/infra';
import { AccountModel, UpdateAccountModel } from '~/modules/accounts/domain';
import { UpdateAccount } from '~/modules/accounts/domain';

@Injectable()
export class UpdateAccountService implements UpdateAccount {
  constructor(
    @InjectModel(Account.name)
    private accountModel: Model<AccountDocument>,
  ) {}

  async execute(
    id: string,
    updateAccountModel: UpdateAccountModel,
  ): Promise<AccountModel> {
    const accountUpdated = await this.accountModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateAccountModel,
      },
      { new: true },
    );

    return accountUpdated;
  }
}
