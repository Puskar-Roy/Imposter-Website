import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import fs from 'fs';
import path from 'path';

// Manual env loading for standalone script
const envPath = path.resolve(process.cwd(), '.env');
let envVars = {};

try {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envVars = Object.fromEntries(
    envContent.split('\n')
      .filter(line => line.includes('=') && !line.startsWith('#'))
      .map(line => {
        const [key, ...val] = line.split('=');
        return [key.trim(), val.join('=').trim()];
      })
  );
} catch (e) {
  console.warn('⚠️ Could not find or read .env file. Falling back to process.env');
  envVars = process.env;
}

const { MONGO_DB, ADMIN_USERNAME, ADMIN_PASSWORD } = envVars;

async function seed() {
  const mongoUri = MONGO_DB || process.env.MONGO_DB;
  const username = ADMIN_USERNAME || process.env.ADMIN_USERNAME;
  const password = ADMIN_PASSWORD || process.env.ADMIN_PASSWORD;

  if (!mongoUri || !username || !password) {
    console.error('❌ Missing environment variables (MONGO_DB, ADMIN_USERNAME, or ADMIN_PASSWORD)');
    process.exit(1);
  }

  try {
    console.log('⏳ Connecting to MongoDB...');
    await mongoose.connect(mongoUri);
    console.log('✅ Connected.');

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await mongoose.connection.db.collection('users').updateOne(
      { username: username },
      { 
        $set: { 
          username: username, 
          password: hashedPassword,
          role: 'admin',
          updatedAt: new Date()
        },
        $setOnInsert: { createdAt: new Date() }
      },
      { upsert: true }
    );

    if (result.upsertedCount > 0) {
      console.log(`✅ Success: Admin user "${username}" created.`);
    } else {
      console.log(`✅ Success: Admin user "${username}" updated.`);
    }

    await mongoose.disconnect();
    console.log('👋 Disconnected.');
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
}

seed();
