import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Test } from '@nestjs/testing';

import { Account, AccountDocument } from '~/modules/accounts/infra/';
import { factories } from '~/modules/accounts/test';

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
    const mockedAccount = factories.createAccount.build();

    jest
      .spyOn(accountModel, 'create')
      .mockImplementation(async () => mockedAccount);

    const savedAccount = await createAccountService.execute(mockedAccount);

    expect(savedAccount).toEqual(mockedAccount);
    expect(accountModel.create).toHaveBeenCalled();
  });
});
