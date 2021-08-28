import { datatype, internet, name } from 'faker';

import { CreateAccountModel } from '../../domain';

export const createAccountShape: CreateAccountModel = {
  name: name.findName(),
  email: internet.email(),
  password: internet.password(),
  isAdmin: datatype.boolean(),
};
