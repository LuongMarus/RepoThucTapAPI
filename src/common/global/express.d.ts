import 'express';
import { RoleType, RoleScope } from '@/types/role';
import { RefreshTokenPayload } from '@/types/jwt';
import { TempTokenPayload } from '@/modules/identity/key-token/key-token.service';

declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
        username: string;
        fullName: string;
        role: RoleType;
        roleScope: RoleScope;
        permissions: string[];
      };
      refresh: RefreshTokenPayload;
      refreshToken?: string;

      tempTokenPayload?: TempTokenPayload;

      resource?: any; // For resource ownership validation
      changeReason?: string; // For audit trail
      auditAction?: string; // For audit logging

      apiKey: {
        keyId: string;
        owner: string;
        scopes: string[];
      };

      // For rate limit
      rateLimitKey?: string;

      // For file
      file?: Express.Multer.File;
    }
  }
}
