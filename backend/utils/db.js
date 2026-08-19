import { PrismaClient } from '../prisma/generated-client/index.js';

if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL = "postgresql://neondb_owner:npg_lN1pgnUxOt7T@ep-solitary-star-ayi0iu9k-pooler.c-5.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require&connection_limit=3";
}

const prisma = new PrismaClient();

export default prisma;
