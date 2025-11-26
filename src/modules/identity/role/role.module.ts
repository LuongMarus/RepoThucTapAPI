import { Module } from '@nestjs/common';

import { PrismaModule } from '@/modules/shared/prisma';
import { UserRoleModule } from '../user-role';
import { RoleClosureModule } from '../role-closure';

import { RoleService } from './role.service';
import { RoleRepository } from './role.repository';

@Module({
  imports: [PrismaModule, UserRoleModule, RoleClosureModule],
  providers: [RoleService, RoleRepository],
  exports: [RoleService, RoleRepository],
})
export class RoleModule {}
