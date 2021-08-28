import { datatype, internet, name } from 'faker';
import { Factory } from 'fishery';

import { CreateAccountModel } from '~/modules/accounts/domain';

export const createAccountFactory = Factory.define<CreateAccountModel>(() => ({
  name: name.findName(),
  email: internet.email(),
  password: internet.password(),
  isAdmin: datatype.boolean(),
}));
