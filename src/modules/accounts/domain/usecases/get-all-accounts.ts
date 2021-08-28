import { AccountModel } from '~/modules/accounts/domain/models';

export interface GetAllAccounts {
  execute(): Promise<AccountModel[]>;
}
