import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account, AccountDocument } from '../../../infra';
import { AccountModel } from '../../../domain';
import { GetOneAccount } from '../../../domain';

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
