import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/modules/shared/prisma';

import type { Prisma } from '@/generated/prisma/client';

type RoleQuery = Prisma.RoleSelect | null;
type RoleInclude = Prisma.RoleInclude | null;
type RoleResult = Prisma.RoleGetPayload<{
  select: RoleQuery;
  include: RoleInclude;
}>;

@Injectable()
export class RoleRepository {
  constructor(private prisma: PrismaService) {}

  async createOneWithTransaction<
    T extends RoleQuery = null,
    I extends RoleInclude = null,
  >(
    tx: Prisma.TransactionClient,
    data: Prisma.RoleCreateInput,
    options?: {
      select?: T;
      include?: I;
    },
  ): Promise<RoleResult> {
    const buildQuery = await tx.role.create({
      data,
      ...options,
    });
    return buildQuery;
  }
}
