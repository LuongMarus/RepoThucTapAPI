import { Module } from '@nestjs/common';
import {
  ThrottlerModule as NestThrottlerModule,
  seconds,
} from '@nestjs/throttler';

import { KEY_THROTTLER } from '@/common/constants';

@Module({
  imports: [
    NestThrottlerModule.forRoot([
      {
        name: KEY_THROTTLER.SHORT,
        ttl: seconds(1),
        limit: 3,
      },
      {
        name: KEY_THROTTLER.MEDIUM,
        ttl: seconds(10),
        limit: 20,
      },
      {
        name: KEY_THROTTLER.LONG,
        ttl: seconds(60),
        limit: 100,
      },
    ]),
  ],
})
export class ThrottlerModule {}
