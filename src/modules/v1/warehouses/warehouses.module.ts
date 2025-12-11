import { Module } from '@nestjs/common';
import { WarehousesController } from './warehouses.controller';
import { WarehousesService } from './warehouses.service';
import { PrismaService } from '@/modules/shared/prisma';

import { KeyTokenModule } from '../identity/key-token';
import { IoredisModule } from '@/modules/shared';

@Module({
  imports: [KeyTokenModule, IoredisModule],
  controllers: [WarehousesController],
  providers: [WarehousesService, PrismaService],
})
export class WarehousesModule {}
