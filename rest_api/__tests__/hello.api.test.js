const request = require('supertest')
const app = require('../app')

test("Success case with /hello", async () => {

    // Step 1 :: Start server
    // Step 2 :: Send request to /hello
    const response = await request(app).get('/hello')

    // Step 3 :: Verify response (200, message=Hello World!)
    expect(response.status).toEqual(200);
    expect(response.body.message).toEqual('Hello World!');
    expect(response.body).toEqual({message: 'Hello World!'});
});