import { Module } from '@nestjs/common';
import { ReceiptsController } from './receipts.controller';
import { ReceiptsService } from './receipts.service';
import { PrismaService } from '../../shared/prisma';

import { KeyTokenModule } from '../identity/key-token';
import { IoredisModule } from '@/modules/shared';

@Module({
  imports: [KeyTokenModule, IoredisModule],
  controllers: [ReceiptsController],
  providers: [ReceiptsService, PrismaService],
})
export class ReceiptsModule {}
