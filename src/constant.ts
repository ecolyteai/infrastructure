import { envSchema } from './types/zod';

export const validatedEnv = envSchema.parse(process.env);
