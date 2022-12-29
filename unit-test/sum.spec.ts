import { sum } from "./sum";

test("properly adds 1 and 2", () => {
  expect(sum(1, 2)).toBe(3);
});

test("properly adds 2 and 2", () => {
  expect(sum(2, 2)).toBe(4);
});

it("suming 5 and 2 will return 7", () => {
  expect(sum(5, 2)).toBe(7);
});
