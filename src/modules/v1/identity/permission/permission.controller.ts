import { ApiTags } from '@nestjs/swagger';
import { Controller } from '@nestjs/common';

import { PermissionService } from './permission.service';

@Controller({ path: 'permission', version: '1' })
@ApiTags('Permission')
export class PermissionController {
  constructor(private permissionService: PermissionService) {}
}
