import { Module } from '@nestjs/common';
import { UnitsController } from './units.controller';
import { UnitsService } from './units.service';
import { PrismaService } from '../../shared/prisma';

import { KeyTokenModule } from '../identity/key-token';
import { IoredisModule } from '@/modules/shared';

@Module({
  imports: [KeyTokenModule, IoredisModule],
  controllers: [UnitsController],
  providers: [UnitsService, PrismaService],
})
export class UnitsModule {}
