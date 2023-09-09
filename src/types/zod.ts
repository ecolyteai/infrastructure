import env from 'dotenv';
import { z } from 'zod';

env.config();

const envSchema = z
  .object({
    PORT: z.string().default('8080'),
    DATABASE_URL: z.string(),
    SECRET: z.string()
  })
  .required();

export { envSchema };
