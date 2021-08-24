import { UpdateAccountModel } from '../models';
import { AccountModel } from '../models';

export interface UpdateAccount {
  execute(
    id: string,
    updateAccountModel: UpdateAccountModel,
  ): Promise<AccountModel>;
}
