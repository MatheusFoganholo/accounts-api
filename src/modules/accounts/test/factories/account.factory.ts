import { datatype, internet, name } from 'faker';
import { Factory } from 'fishery';

import { AccountModel } from '~/modules/accounts/domain';

export const accountFactory = Factory.define<AccountModel>(() => ({
  name: name.findName(),
  email: internet.email(),
  password: internet.password(),
  isAdmin: datatype.boolean(),
}));
