const request = require("supertest");
const app = require("../../app");

const pg = require('pg');
jest.mock('pg', () => {
  const _pool = {
    connect: jest.fn(),
    query: jest.fn(),
    end: jest.fn(),
  };
  return { Pool: jest.fn(() => _pool) };
});

let pool
beforeEach(() => {
  pool = new pg.Pool();
});
afterEach(() => {
  jest.clearAllMocks();
});

const db = require('../../database')

test("Hello api GET /hello with mock", async() => {
  // Mock
  pool.query.mockResolvedValueOnce({ rows: [{ message: "Mock Data" }], rowCount: 1 });
  // Test
  const response = await request(app).get("/hello/db");
  // db.getMessage()
  expect(pool.query).toBeCalledTimes(1);
  expect(pool.query).toBeCalledWith('SELECT * FROM messages');
  expect(response.status).toBe(200);
  expect(response.body.message).toEqual('Mock Data');
  expect(response.body).toEqual({ message: 'Mock Data' });
});