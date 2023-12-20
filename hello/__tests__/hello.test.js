const hello = require("../hello");

test("Hello Test", () => {
    // Compare = expect, assert, should
    const result = hello.hi("demo");
    expect(result).toBe("Say hi demo");
});
