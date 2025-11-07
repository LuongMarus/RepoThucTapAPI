import { Inject, Injectable } from '@nestjs/common';
import * as ioredisProvider from './ioredis.provider';

@Injectable()
export class IoredisService {
  constructor(
    @Inject(ioredisProvider.REDIS_CLIENT)
    private readonly client: ioredisProvider.RedisClient,
  ) {}

  async set(key: string, value: string, expirationSeconds: number) {
    await this.client.set(key, value, 'EX', expirationSeconds);
  }

  async get(key: string): Promise<string | null> {
    return await this.client.get(key);
  }
}
