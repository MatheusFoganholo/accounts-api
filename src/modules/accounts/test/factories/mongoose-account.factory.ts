import { Factory } from 'fishery';
import * as mongoose from 'mongoose';

import {
  Account,
  AccountSchema,
  AccountDocument,
} from '~/modules/accounts/infra';

import { accountFactory } from './account.factory';

const MongooseAccountModel = mongoose.model<AccountDocument>(
  Account.name,
  AccountSchema,
);

export const mongooseAccountFactory = Factory.define<AccountDocument>(
  () => new MongooseAccountModel(accountFactory.build()),
);
