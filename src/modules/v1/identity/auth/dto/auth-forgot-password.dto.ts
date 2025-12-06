import { z } from 'zod/v4';

import { authForgotPasswordSchema } from '../validations';
import { createZodDto } from 'nestjs-zod';

export type AuthForgotPasswordDto = z.infer<typeof authForgotPasswordSchema>;

export class ClassAuthForgotPasswordDto extends createZodDto(
  authForgotPasswordSchema,
) {}
