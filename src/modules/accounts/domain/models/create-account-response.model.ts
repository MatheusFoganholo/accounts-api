import { AccountModel } from '~/modules/accounts/domain/models';

export interface CreateAccountResponse {
  success: boolean;
  error?: string;
  data?: AccountModel;
}
