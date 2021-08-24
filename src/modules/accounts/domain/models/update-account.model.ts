import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountModel } from './create-account.model';

export class UpdateAccountModel extends PartialType(CreateAccountModel) {}
