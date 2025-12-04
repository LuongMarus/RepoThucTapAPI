import { z } from 'zod/v4';

import { authForgotPasswordSchema } from '../validations';

export type AuthForgotPasswordDto = z.infer<typeof authForgotPasswordSchema>;
