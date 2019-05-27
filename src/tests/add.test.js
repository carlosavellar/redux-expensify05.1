const add = (a, b) => a + b;
const grretingName = (name) => `Hello ${name}`;


test("Test addition", () => {
    const result = add(3, 6);
    expect(result).toBe(9);
});

test("Test name string", () => {
    const result = grretingName("José");
    expect(result).toBe("Hello José");
});

