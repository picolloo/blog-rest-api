require('dotenv-safe').config();
const path = require('path');

module.exports = {
  test: {
    client: 'postgres',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'postgres',
      database: 'test',
    },
    migrations: {
      directory: path.join(
        __dirname,
        'src',
        'shared',
        'database',
        'migrations',
      ),
    },
    seeds: {
      directory: path.join(__dirname, 'src', 'shared', 'database', 'seeds'),
    },
  },
  development: {
    client: 'postgres',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    migrations: {
      directory: path.join(
        __dirname,
        'src',
        'shared',
        'database',
        'migrations',
      ),
    },
    seeds: {
      directory: path.join(__dirname, 'src', 'shared', 'database', 'seeds'),
    },
  },
  production: {
    client: 'postgres',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    migrations: {
      directory: path.join(
        __dirname,
        'src',
        'shared',
        'database',
        'migrations',
      ),
    },
    seeds: {
      directory: path.join(__dirname, 'src', 'shared', 'database', 'seeds'),
    },
  },
};
