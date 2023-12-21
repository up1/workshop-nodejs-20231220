const request = require('supertest')
const app = require('../app')

test("Success case with /hello/db working with db", async () => {
    const response = await request(app).get('/hello/db')
    
    expect(response.status).toEqual(200);
    expect(response.body.message).toEqual('Hello World!');
    expect(response.body).toEqual({ message: 'Hello World!' });
});
