import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Test } from '@nestjs/testing';

import { Account, AccountDocument } from '~/modules/accounts/infra';
import { factories } from '~/modules/accounts/test';

import { CreateAccountService } from './create-account.service';

describe('CreateAccountService', () => {
  const mockExec = jest.fn();
  const mockAccountModel = () => ({
    create: jest.fn(),
    findOne: jest.fn(() => ({ exec: mockExec })),
  });

  let createAccountService: CreateAccountService;
  let accountModel: Model<AccountDocument>;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [
        CreateAccountService,
        {
          provide: getModelToken(Account.name),
          useFactory: mockAccountModel,
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
      .mockImplementationOnce(async () => mockedAccount);

    const savedAccount = await createAccountService.execute(mockedAccount);

    expect(savedAccount.data).toEqual(mockedAccount);
    expect(accountModel.create).toHaveBeenCalledWith(mockedAccount);
  });

  it('Should not create a account if email already exists', async () => {
    const account = factories.account.build();
    const mockedAccount = factories.createAccount.build();

    mockExec.mockReturnValueOnce(Promise.resolve(account));

    const createAccountTentative = await createAccountService.execute(
      mockedAccount,
    );

    expect(createAccountTentative.success).toBeFalsy();
    expect(createAccountTentative.data).toBeFalsy();
    expect(createAccountTentative.error).toBeTruthy();
  });
});
