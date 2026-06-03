
import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

const databaseUrl = new URL(process.env.DATABASE_URL!);
const neonHost = databaseUrl.hostname;

export default defineConfig({
    out: './drizzle',
    schema: './src/db/schema.ts',
    dialect: 'postgresql',
    dbCredentials: {
        host: '35.171.11.169',
        port: 5432,
        user: decodeURIComponent(databaseUrl.username),
        password: decodeURIComponent(databaseUrl.password),
        database: databaseUrl.pathname.slice(1),
        ssl: {
            rejectUnauthorized: false,
            servername: neonHost,
        },
    },
});
