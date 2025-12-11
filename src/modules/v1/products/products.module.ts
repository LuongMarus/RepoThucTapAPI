import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { PrismaService } from '../../shared/prisma';

import { KeyTokenModule } from '../identity/key-token';
import { IoredisModule } from '@/modules/shared';

@Module({
  imports: [KeyTokenModule, IoredisModule],
  controllers: [ProductsController],
  providers: [ProductsService, PrismaService],
})
export class ProductsModule {}
