import { jest } from "@jest/globals";

test('mock successfully', async () => {
    jest.unstable_mockModule("../../server/expensive-methods.js", () => ({
        expensiveMethod: () => {
            return "called expensive method but cheaply";
        }
    }));
    const { callFunc } = await import("../../server/index.js");

    const result = await callFunc();
    const expected = "method called and returned 'called expensive method but cheaply'";

    expect(result).toBe(expected);
});

