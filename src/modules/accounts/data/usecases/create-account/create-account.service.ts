import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Account, AccountDocument } from '~/modules/accounts/infra';
import { CreateAccountResponse } from '~/modules/accounts/domain';
import { CreateAccount, CreateAccountModel } from '~/modules/accounts/domain';

@Injectable()
export class CreateAccountService implements CreateAccount {
  constructor(
    @InjectModel(Account.name)
    private accountModel: Model<AccountDocument>,
  ) {}

  async execute(
    createAccountModel: CreateAccountModel,
  ): Promise<CreateAccountResponse> {
    const accountAlreadyExists = await this.accountModel
      .findOne(
        {
          email: createAccountModel.email,
        },
        { _id: 0, __v: 0 },
      )
      .exec();

    if (accountAlreadyExists)
      return {
        success: false,
        error: 'This email is already in use. Try another one.',
      };

    const account = await this.accountModel.create(createAccountModel);
    return { success: true, data: account };
  }
}
