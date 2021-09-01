import { accountFactory } from './account.factory';
import { createAccountFactory } from './create-account.factory';
import { mongooseAccountFactory } from './mongoose-account.factory';

export const factories = {
  account: accountFactory,
  createAccount: createAccountFactory,
  mongooseAccount: mongooseAccountFactory,
};
