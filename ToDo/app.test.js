const request = require('supertest');
const app = require('./app');

describe('Checking if the route "/" works', () => {
    test('I am alive', done => {
        request(app)
        .get('/')
        .expect(200)
        .end(done)
    });
});
describe('Can get an answer from /users', () => {
    test('GET /users', done => {
        request(app)
        .get('/users')
        .expect('respond with a resource')
        .end(done)
    });
});
describe('Can get an answer from /testing', () => {
    test('GET /testing', done => {
        request(app)
        .get('/testing')
        .expect(200)
        .end(done)
    });
});

