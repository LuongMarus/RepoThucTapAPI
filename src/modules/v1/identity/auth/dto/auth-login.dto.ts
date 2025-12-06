import { z } from 'zod/v4';
import { createZodDto } from 'nestjs-zod';

import { authLoginSchema } from '../validations/auth-login-schema';
import { responseControllerSchema } from '@/common/validations/response-controller';

export type AuthLoginDto = z.infer<typeof authLoginSchema>;

export class ClassResponseAuthLoginDto extends createZodDto(
  responseControllerSchema(authLoginSchema),
) {}
