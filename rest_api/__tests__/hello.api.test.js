const request = require('supertest')
const nock = require('nock')
const app = require('../app')

afterEach(() => {   
    nock.cleanAll()
});

test("Success case with /hello", async () => {
    // Mocking external api
    nock('https://jsonplaceholder.typicode.com')
        .get('/users/1')
        .reply(200, {
            name: 'Somkiat'
        })

    // Step 1 :: Start server
    // Step 2 :: Send request to /hello
    const response = await request(app).get('/hello')

    // Step 3 :: Verify response (200, message=Hello World!)
    expect(response.status).toEqual(200);
    expect(response.body.message).toEqual('Hello World with Somkiat');
    expect(response.body).toEqual({ message: 'Hello World with Somkiat' });
});

test("Error 500 case with /hello", async () => {
    const response = await request(app).get('/hello')
    expect(response.status).toEqual(500);
    expect(response.body.message).toEqual('Error');
});