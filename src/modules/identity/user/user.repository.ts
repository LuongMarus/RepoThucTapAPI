import { Injectable } from '@nestjs/common';

import { PrismaService } from '@/modules/shared/prisma';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}
}
