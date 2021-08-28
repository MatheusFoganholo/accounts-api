import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Test } from '@nestjs/testing';

import { Account, AccountDocument } from '~/modules/accounts/infra/';
import { createAccountShape } from '~/modules/accounts/utils';

import { CreateAccountService } from './create-account.service';

describe('CreateAccountService', () => {
  const mockAccountModel = {
    create: jest.fn(),
    save: jest.fn(),
  };

  let createAccountService: CreateAccountService;
  let accountModel: Model<AccountDocument>;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [
        CreateAccountService,
        {
          provide: getModelToken(Account.name),
          useValue: mockAccountModel,
        },
      ],
    }).compile();

    createAccountService = module.get(CreateAccountService);
    accountModel = module.get(getModelToken(Account.name));
  });

  it('Should be defined', () => {
    expect(createAccountService).toBeDefined();
  });

  it('Should create a account with correct values', async () => {
    jest
      .spyOn(accountModel, 'create')
      .mockImplementation(async () => createAccountShape);

    const savedAccount = await createAccountService.execute(createAccountShape);

    expect(savedAccount).toEqual(createAccountShape);
    expect(accountModel.create).toHaveBeenCalled();
  });
});
