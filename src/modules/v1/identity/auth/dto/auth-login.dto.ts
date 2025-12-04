import { z } from 'zod/v4';
import { authLoginSchema } from '../validations/auth-login-schema';

export type AuthLoginDto = z.infer<typeof authLoginSchema>;
