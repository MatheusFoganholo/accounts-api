import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AccountsModule } from '~/modules/accounts/account.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://matheus:accountsPassword@accounts.bgt2p.mongodb.net/accounts?retryWrites=true&w=majority',
    ),
    AccountsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
