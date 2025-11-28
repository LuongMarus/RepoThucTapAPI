import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { ROLES_KEY, RolesTypes } from '../decorators';
import type { Request } from 'express';
import { Roles } from '../enums';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<RolesTypes[]>(
      ROLES_KEY,
      context.getHandler(),
    );

    // If no roles are specified, allow access (public route)
    if (!roles) {
      return true;
    }

    const request = context.switchToHttp().getRequest<Request>();
    const user = request.user;
    if (!user?.role) {
      throw new UnauthorizedException('User not found');
    }
    const isUserInRole = (role: Roles) => user.role.includes(role);
    return roles.some(isUserInRole);
  }
}
