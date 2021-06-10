const app = require('../index')
const knex = require('../db/knex')
const request = require('supertest');
const { expect } = require('chai');
const fixtures = require('./fixtures')

describe('CRUD stickers', () => {
    before(async function () {
        // run migrations    
        await knex.migrate.latest()
            .then(() => {
                // run seeds
                return knex.seed.run();
            })
            .then(() => done());
    });

    it('Listing all records', async function () {
        request(app)
            .get('/api/stickers')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('array')
            })
    });
});

describe('ListRecords()', () => {
    it('Listing all records', async function () {
        request(app)
            .get('/api/stickers')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('array')
            })
    });
});


describe('ListOneRecord()', () => {
    it('Listing one record', async function () {
        request(app)
            .get('/api/stickers/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('object')
                expect(response.body).to.deep.equal(fixtures.stickers[0])
            })
    });
});

describe('createRecord()', () => {
    it('created a record', async function (done) {
        request(app)
            .post('/api/stickers')
            .send(fixtures.sticker)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('object')
                fixtures.sticker.id = response.body.id
                expect(response.body).to.deep.equal(fixtures.sticker)
            })
            done()
    });
});


describe('editOneRecord()', () => {
    it('editing one record', async function () {
        fixtures.sticker.rating = 5;
        request(app)
            .put('/api/stickers/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('object')
                expect(response.body).to.deep.equal(fixtures.sticker)
            })
    });
});

describe('deleteRecord()', () => {
    it('editing one record', async function () {
        request(app)
            .delete('/api/stickers/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('object')
                expect(response.body).to.deep.equal(fixtures.sticker)
                deleted: true
            })
    });
});