import { AccountModel } from '~/modules/accounts/domain/models';

export interface GetOneAccount {
  execute(id: string): Promise<AccountModel>;
}
