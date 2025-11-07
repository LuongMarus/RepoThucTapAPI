import { Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import Redis, { type RedisOptions } from 'ioredis';

import { EnvConfig } from '@/configs';

export type RedisClient = Redis;
export const REDIS_CLIENT = Symbol('REDIS_CLIENT');

export const ioredisProvider: Provider = {
  useFactory: (configService: ConfigService<EnvConfig>): RedisClient => {
    const url = configService.get<string>('REDIS_URL');
    if (!url) {
      throw new Error('REDIS_URL is not set');
    }
    if (!url.startsWith('redis://')) {
      throw new Error('REDIS_URL must start with redis://');
    }
    if (!url.includes('@')) {
      throw new Error('REDIS_URL must contain @');
    }

    const redisOptions: RedisOptions = {
      retryStrategy: (times: number) => {
        if (times > 3) {
          console.error('[ioredis] Max retries reached');
          return null;
        }
        const delay = Math.min(times * 50, 2000);
        return delay;
      },
      maxRetriesPerRequest: 3,
      enableReadyCheck: true,
      lazyConnect: false,
      connectTimeout: 10000,
      keepAlive: 30000,
    };

    const redis = new Redis(url, redisOptions);

    // Handle connection errors - stop retrying on auth errors
    redis.on('error', (error) => {
      const errorMessage = error.message.toLowerCase();
      console.log('[ioredis] Redis error:', errorMessage);
      // Stop retrying on authentication errors
      if (
        errorMessage.includes('wrongpass') ||
        errorMessage.includes('noauth') ||
        errorMessage.includes('invalid username-password')
      ) {
        console.error('[ioredis] Error:', error.message);
        // Disable retry strategy for auth errors
        redis.disconnect();
        return;
      }

      // Only log other errors (not connection errors that will be retried)
      if (
        !errorMessage.includes('econnrefused') &&
        !errorMessage.includes('etimedout')
      ) {
        console.error('[ioredis] Connection error:', error.message);
      }
    });

    redis.on('connect', () => {
      console.log('[ioredis] Redis client connected');
    });

    redis.on('ready', () => {
      console.log('[ioredis] Redis client ready and authenticated');
    });

    redis.on('close', () => {
      console.log('[ioredis] Redis client connection closed');
    });

    redis.on('reconnecting', (delay: number) => {
      console.log(`[ioredis] Redis client reconnecting in ${delay}ms`);
    });

    return redis;
  },
  inject: [ConfigService],
  provide: REDIS_CLIENT,
};
