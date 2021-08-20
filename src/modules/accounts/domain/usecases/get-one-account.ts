import { AccountModel } from '../models';

export interface GetOneAccount {
  execute(id: string): Promise<AccountModel>;
}
