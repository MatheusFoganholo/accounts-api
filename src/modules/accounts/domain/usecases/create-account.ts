import { AccountModel, CreateAccountModel } from '../models';

export interface CreateAccount {
  execute(createAccountModel: CreateAccountModel): Promise<AccountModel>;
}
