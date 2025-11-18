// Database configuration
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_5nsmjhodHk0A@ep-fancy-violet-a451g6ba-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
    },
  },
});

module.exports = prisma;

