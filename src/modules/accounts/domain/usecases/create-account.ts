import {
  AccountModel,
  CreateAccountModel,
} from '~/modules/accounts/domain/models';

export interface CreateAccount {
  execute(createAccountModel: CreateAccountModel): Promise<AccountModel>;
}
