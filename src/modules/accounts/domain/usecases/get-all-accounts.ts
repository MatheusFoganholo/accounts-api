import { AccountModel } from '../models';

export interface GetAllAccounts {
  execute(): Promise<AccountModel[]>;
}
