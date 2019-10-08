require('dotenv').config();

module.exports = {
    "migrationDirectory": "migrations",
    "driver": "pg",
    // "host": process.env.MIGRATION_DATABASE_HOST,
    // "port": process.env.MIGRATION_DATABASE_PORT,
    // "database": process.env.MIGRATION_DATABASE_NAME,
    // "username": process.env.MIGRATION_DATABASE_USER,
    // "password": process.env.MIGRATION_DATABASE_PASS,
    // "ssl": !!process.env.SSL,
    "connectionString": (process.env.NODE_ENV === 'test')
        ? process.env.TEST_DB_URL
        : process.env.DB_URL,
}