import { Module } from '@nestjs/common';

import { SuppliersRepository } from './suppliers.repository';
import { SuppliersService } from './suppliers.service';
import { SuppliersController } from './suppliers.controller';

import { KeyTokenModule } from '../identity/key-token';
import { IoredisModule } from '@/modules/shared';

@Module({
  imports: [KeyTokenModule, IoredisModule],
  controllers: [SuppliersController],
  providers: [SuppliersService, SuppliersRepository],
  exports: [SuppliersService, SuppliersRepository],
})
export class SuppliersModule {}
