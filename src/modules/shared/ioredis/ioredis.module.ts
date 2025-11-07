import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TerminusModule } from '@nestjs/terminus';

import { IoredisService } from './ioredis.service';
import { ioredisProvider, REDIS_CLIENT } from './ioredis.provider';
import { IoredisHealthIndicator } from './ioredis.health';

@Global()
@Module({
  imports: [ConfigModule, TerminusModule],
  providers: [IoredisService, ioredisProvider, IoredisHealthIndicator],
  exports: [IoredisService, REDIS_CLIENT, IoredisHealthIndicator],
})
export class IoredisModule {}
