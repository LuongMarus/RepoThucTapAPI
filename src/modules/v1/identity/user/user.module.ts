import { Module } from '@nestjs/common';

import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import { UserController } from './user.controller';

import { KeyTokenModule } from '../key-token';
import { IoredisModule } from '@/modules/shared';

@Module({
  imports: [KeyTokenModule, IoredisModule],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService, UserRepository],
})
export class UserModule {}
