import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account, AccountDocument } from '../../../infra';
import { AccountModel } from '../../../domain';
import { UpdateAccount } from '../../../domain';
import { UpdateAccountDto } from '../../../presentation';

@Injectable()
export class UpdateAccountService implements UpdateAccount {
  constructor(
    @InjectModel(Account.name)
    private accountModel: Model<AccountDocument>,
  ) {}

  async execute(
    id: string,
    updateAccountDto: UpdateAccountDto,
  ): Promise<AccountModel> {
    const accountUpdated = await this.accountModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateAccountDto,
      },
      { new: true },
    );

    return accountUpdated;
  }
}
