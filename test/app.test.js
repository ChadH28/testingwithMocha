const knex = require('../db/knex')

describe('CRUD stickers', () => {
    before( (done) => {
        // run migrations
        // run seeds
        knex.migrate.latest()
            .then(() => {
                return knex.seed.run()
            })
            .then(() => done() )
    })
    it('works', function () {
        console.log('working 100');
    })
})