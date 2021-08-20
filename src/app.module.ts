import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountsModule } from './modules/accounts/account.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://matheus:crudAccountsPassword@crud-accounts.b0jxb.mongodb.net/test',
    ),
    AccountsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
