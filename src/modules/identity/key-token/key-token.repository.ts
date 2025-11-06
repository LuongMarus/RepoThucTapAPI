import { Injectable } from '@nestjs/common';

import { PrismaService } from '@/modules/shared/prisma/prisma.service';

@Injectable()
export class KeyTokenRepository {
  constructor(private prisma: PrismaService) {}

  findOneByPk() {}

  findOneById() {}

  findOneByUserId() {}

  deleteOneById() {}
  deleteOneByUserId() {}

  deleteKeyStoreCachedByUserId() {}
}
