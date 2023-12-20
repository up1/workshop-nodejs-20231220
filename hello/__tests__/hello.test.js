const hello = require("../hello");

test("Hello Test 1", () => {
    // Compare = expect, assert, should
    const result = hello.hi("demo");
    expect(result).toBe("Say hi demo");
});

describe("Hello Test 2", () => {
    it("should say hi demo", () => {
        const result = hello.hi("demo");
        expect(result).toBe("Say hi demo");
    });
});
