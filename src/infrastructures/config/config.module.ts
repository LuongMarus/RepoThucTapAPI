import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';

import { envConfigSchema } from '@/common/validations/env-config';
import { envConfig } from '@/configs';

@Module({
  imports: [
    NestConfigModule.forRoot({
      validate: (config) => {
        const result = envConfigSchema.safeParse(config);
        if (!result.success) {
          throw new Error(result.error.message);
        }
        return result.data;
      },
      isGlobal: true,
      envFilePath: '.env',
      load: [() => envConfig],
      cache: envConfig.NODE_ENV === 'production' ? true : false,
    }),
  ],
  exports: [NestConfigModule],
})
export class ConfigModule {}
