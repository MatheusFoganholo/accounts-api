import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account, AccountDocument } from '../../../infra';
import { AccountModel } from '../../../domain';
import { CreateAccount } from '../../../domain';
import { CreateAccountDto } from '../../../presentation';

@Injectable()
export class CreateAccountService implements CreateAccount {
  constructor(
    @InjectModel(Account.name)
    private accountModel: Model<AccountDocument>,
  ) {}

  execute(createAccountDto: CreateAccountDto): Promise<AccountModel> {
    const account = new this.accountModel(createAccountDto);
    return account.save();
  }
}
