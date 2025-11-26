import type z from 'zod/v4';
import { roleCreationSchema } from '../validations/role-creation-schema';

export type RoleCreationDto = z.infer<typeof roleCreationSchema>;
