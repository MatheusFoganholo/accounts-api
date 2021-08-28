import { AccountModel } from '~/modules/accounts/domain/models';
import { UpdateAccountModel } from '~/modules/accounts/domain/models';

export interface UpdateAccount {
  execute(
    id: string,
    updateAccountModel: UpdateAccountModel,
  ): Promise<AccountModel>;
}
