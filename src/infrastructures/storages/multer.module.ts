import { Module } from '@nestjs/common';
import { MulterModule as NestMulterModule } from '@nestjs/platform-express';

import { uploadDir } from '@/configs';

@Module({
  imports: [
    NestMulterModule.register({
      dest: `../../${uploadDir[0]}`,
    }),
  ],
  exports: [NestMulterModule],
})
export class MulterModule {}
