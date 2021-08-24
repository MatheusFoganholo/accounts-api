import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account, AccountDocument } from '../../../infra';
import { AccountModel } from '../../../domain';
import { CreateAccount, CreateAccountModel } from '../../../domain';

@Injectable()
export class CreateAccountService implements CreateAccount {
  constructor(
    @InjectModel(Account.name)
    private accountModel: Model<AccountDocument>,
  ) {}

  execute(createAccountModel: CreateAccountModel): Promise<AccountModel> {
    const account = new this.accountModel(createAccountModel);
    return account.save();
  }
}
