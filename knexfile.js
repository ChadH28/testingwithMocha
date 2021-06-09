// Update with your config settings.

module.exports = {

  development: {
    client: "pg",
    connection: {
      host: 'localhost',
      database: 'testing',
      password: '1234',
      port: 5432
    },
    migrations: {
      directory: __dirname + "/db/migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds",
    },
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/test-testing'
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
