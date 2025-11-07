import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';

import { HealthController } from './health.controller';
import { IoredisModule } from '../shared/ioredis/ioredis.module';
import { PrismaModule } from '../shared/prisma/prisma.module';

@Module({
  imports: [TerminusModule, HttpModule, IoredisModule, PrismaModule],
  controllers: [HealthController],
})
export class HealthModule {}
