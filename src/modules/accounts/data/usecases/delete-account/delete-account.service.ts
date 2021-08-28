import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Account, AccountDocument } from '~/modules/accounts/infra';
import { DeleteResponse } from '~/modules/accounts/domain';
import { DeleteAccount } from '~/modules/accounts/domain';

@Injectable()
export class DeleteAccountService implements DeleteAccount {
  constructor(
    @InjectModel(Account.name)
    private accountModel: Model<AccountDocument>,
  ) {}

  async execute(id: string): Promise<DeleteResponse> {
    const deletedAccount = await this.accountModel.deleteOne({ _id: id });
    return deletedAccount.deletedCount === 1
      ? { success: true }
      : { success: false };
  }
}
