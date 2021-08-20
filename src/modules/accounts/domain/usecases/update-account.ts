import { UpdateAccountDto } from '../../presentation/dtos';
import { AccountModel } from '../models';

export interface UpdateAccount {
  execute(
    id: string,
    updateAccountDto: UpdateAccountDto,
  ): Promise<AccountModel>;
}
