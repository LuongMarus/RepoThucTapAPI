import { Body, Controller, Post } from '@nestjs/common';

import { RoleService } from '.';

import type { ResponseController } from '@/types/response-controller';
import type { RoleCreationDto } from './dto';

@Controller('role')
export class RoleController {
  constructor(private roleService: RoleService) {}

  @Post('create')
  async createRole(
    @Body() body: RoleCreationDto,
  ): Promise<ResponseController<unknown>> {
    const result = await this.roleService.createRole(body);
    return {
      message: 'Role created successfully',
      metadata: result,
    };
  }
}
