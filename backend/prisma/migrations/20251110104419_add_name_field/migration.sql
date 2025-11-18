-- AddColumn
ALTER TABLE "User"
ADD COLUMN "name" TEXT NOT NULL DEFAULT 'Unknown';

-- Drop the default so Prisma schema stays aligned with the Prisma schema
ALTER TABLE "User"
ALTER COLUMN "name" DROP DEFAULT;

