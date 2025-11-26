import { Module } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { EventsModule } from '@/infrastructures/events';
import { MulterModule } from '@/infrastructures/storages';
import { ThrottlerModule } from '@/infrastructures/throttler';
import { ConfigModule } from '@/infrastructures/config';

import { RolesGuard } from '@/common/guards';

import { PrismaModule, HealthModule, IoredisModule } from '@/modules/shared';
import { AuthModule } from '@/modules/identity';
import { MailModule } from '@/modules/mail';
import { ReceiptsModule } from '@/modules/receipts';
import { WarehousesModule } from '@/modules/warehouses';
import { UnitsModule } from '@/modules/units';
import { ProductsModule } from '@/modules/products';

@Module({
  imports: [
    ConfigModule,
    ThrottlerModule,
    MulterModule,
    EventsModule,
    PrismaModule,
    IoredisModule,
    HealthModule,
    MailModule,
    AuthModule,
    ReceiptsModule,
    WarehousesModule,
    UnitsModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
