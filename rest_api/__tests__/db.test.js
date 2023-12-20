const db = require('../database')

test("Try to connect postgres database", async () => {
     const res = await db.getMessage()
     expect(res.rowCount).toBe(1)
     expect(res.rows[0].message).toBe("Hello World!")
});
