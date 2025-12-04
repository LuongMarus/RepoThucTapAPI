import { PermissionService } from './permission.service';
import { Controller } from '@nestjs/common';

@Controller({ path: 'permission', version: '1' })
export class PermissionController {
  constructor(private permissionService: PermissionService) {}
}
