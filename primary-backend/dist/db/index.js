import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import * as pg from 'pg';
import 'dotenv/config';
// 2. Setup the native driver and adapter (required for Prisma v7)
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
// 3. Check if a global instance already exists or create a new one
// Note: We name the local constant 'db' to avoid confusion with the global variable 'prisma'
const db = global.prisma || new PrismaClient({ adapter });
// 4. In development, save the instance to the global object for re-use
if (process.env.NODE_ENV !== 'production') {
    global.prisma = db;
}
// 5. Export the single, reliable instance
export const prismaClient = db;
//# sourceMappingURL=index.js.map