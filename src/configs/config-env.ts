import 'dotenv/config';
import { z } from 'zod';
import { envConfigSchema } from '@/common/validations/env-config';

export type EnvConfig = z.infer<typeof envConfigSchema>;

export const envConfig: EnvConfig = envConfigSchema.parse({
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  CORS_ORIGIN: process.env.CORS_ORIGIN,
  // JWT - (Remove in future)
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
  JWT_REFRESH_EXPIRES_IN: process.env.JWT_REFRESH_EXPIRES_IN,
  // Redis
  REDIS_HOST: process.env.REDIS_HOST,
  REDIS_PORT: process.env.REDIS_PORT,
  REDIS_PASSWORD: process.env.REDIS_PASSWORD,
  REDIS_DB: process.env.REDIS_DB,
});

console.log(`[${envConfig.NODE_ENV}] envConfig`, envConfig);
