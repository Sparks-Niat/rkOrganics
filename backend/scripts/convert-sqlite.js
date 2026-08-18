import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prismaPath = path.join(__dirname, '..', 'prisma', 'schema.prisma');
const envPath = path.join(__dirname, '..', '.env');

try {
  // 1. Modify schema.prisma
  if (fs.existsSync(prismaPath)) {
    let schema = fs.readFileSync(prismaPath, 'utf8');
    
    // Change provider
    schema = schema.replace(/provider\s*=\s*"postgresql"/g, 'provider = "sqlite"');
    
    // Remove @db.Text (unsupported in SQLite)
    schema = schema.replace(/\s*@db\.Text/g, '');
    
    fs.writeFileSync(prismaPath, schema, 'utf8');
    console.log('✓ Successfully updated schema.prisma to SQLite provider.');
  } else {
    console.error('✗ schema.prisma not found at:', prismaPath);
  }

  // 2. Modify .env
  if (fs.existsSync(envPath)) {
    let env = fs.readFileSync(envPath, 'utf8');
    
    // Replace DATABASE_URL
    const dbUrlPattern = /DATABASE_URL\s*=\s*"[^"]*"/g;
    if (dbUrlPattern.test(env)) {
      env = env.replace(dbUrlPattern, 'DATABASE_URL="file:./dev.db"');
    } else {
      env += '\nDATABASE_URL="file:./dev.db"';
    }
    
    fs.writeFileSync(envPath, env, 'utf8');
    console.log('✓ Successfully updated .env to SQLite DATABASE_URL.');
  } else {
    console.error('✗ .env file not found at:', envPath);
  }
  
  console.log('\nNow you can run the migrations:');
  console.log('  npm run db:push && npm run prisma:seed');
} catch (error) {
  console.error('Error during SQLite conversion:', error);
}
