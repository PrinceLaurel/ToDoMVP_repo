const server = require('./server');
const request = require('supertest');

test('Server is alive', async () => {
    const response = await request(server).get('/ping');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('pong');
});

describe('Todo Routes', () => {
    it('should get all todos', async () => {
        const response = await request(server).get('/todos');
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    })
});