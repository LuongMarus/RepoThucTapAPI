import { z } from 'zod';

export const envConfigSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  PORT: z.coerce.number().int().positive().default(3000),
  DATABASE_URL: z.url(),
  CORS_ORIGIN: z.string(),
  // JWT - (Remove in future)
  JWT_SECRET: z.string(),
  JWT_REFRESH_SECRET: z.string(),
  JWT_EXPIRES_IN: z.string(),
  JWT_REFRESH_EXPIRES_IN: z.string(),
  // Redis
  REDIS_URL: z.url(),
  REDIS_DB: z.coerce.number().int().positive().default(1),
});
