import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';

// Manual env loading
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
  envVars = process.env;
}

const mongoUri = envVars.MONGO_DB || process.env.MONGO_DB;

async function checkUsers() {
  if (!mongoUri) {
    console.error('❌ Missing MONGO_DB environment variable.');
    process.exit(1);
  }

  try {
    console.log('⏳ Connecting to MongoDB...');
    await mongoose.connect(mongoUri);
    console.log('✅ Connected.');

    const users = await mongoose.connection.db.collection('users').find({}).toArray();

    if (users.length === 0) {
      console.log('⚠️ No users found in the "users" collection.');
    } else {
      console.log(`📊 Found ${users.length} user(s):`);
      users.forEach((user, index) => {
        console.log(`  ${index + 1}. Username: ${user.username} | Role: ${user.role || 'N/A'} | ID: ${user._id}`);
      });
    }

    await mongoose.disconnect();
    console.log('👋 Disconnected.');
  } catch (error) {
    console.error('❌ Connection or query failed:', error);
    process.exit(1);
  }
}

checkUsers();
