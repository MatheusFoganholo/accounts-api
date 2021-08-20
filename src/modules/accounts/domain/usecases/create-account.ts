import { CreateAccountDto } from '../../presentation';
import { AccountModel } from '../models';

export interface CreateAccount {
  execute(createAccountDto: CreateAccountDto): Promise<AccountModel>;
}
