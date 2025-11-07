import { Controller, Get, Inject } from '@nestjs/common';
import {
  HealthCheck,
  HealthCheckService,
  HttpHealthIndicator,
  PrismaHealthIndicator,
  type HealthCheckResult,
} from '@nestjs/terminus';

import { PrismaService } from '@/modules/shared/prisma/prisma.service';
import {
  REDIS_CLIENT,
  type RedisClient,
} from '@/modules/shared/ioredis/ioredis.provider';
import { IoredisHealthIndicator } from '@/modules/shared/ioredis/ioredis.health';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private prisma: PrismaHealthIndicator,
    private ioredis: IoredisHealthIndicator,
    private prismaService: PrismaService,
    @Inject(REDIS_CLIENT) private redisClient: RedisClient,
  ) {}

  /**
   * Check the health of the application
   * @link https://docs.nestjs.com/recipes/terminus#http-healthcheck
   * @returns The health check result
   */
  @Get()
  @HealthCheck()
  check(): Promise<HealthCheckResult> {
    return this.health.check([
      () => this.http.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
      () => this.prisma.pingCheck('prisma', this.prismaService),
      () => this.ioredis.pingCheck('ioredis', this.redisClient),
    ]);
  }
}
