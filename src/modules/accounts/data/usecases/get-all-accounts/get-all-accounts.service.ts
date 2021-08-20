import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account, AccountDocument } from '../../../infra';
import { AccountModel } from '../../../domain';
import { GetAllAccounts } from '../../../domain';

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
