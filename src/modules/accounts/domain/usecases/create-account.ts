import {
  CreateAccountModel,
  CreateAccountResponse,
} from '~/modules/accounts/domain/models';

export interface CreateAccount {
  execute(
    createAccountModel: CreateAccountModel,
  ): Promise<CreateAccountResponse>;
}
