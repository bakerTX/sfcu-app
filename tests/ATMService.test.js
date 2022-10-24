import ATMService from "../services/ATMService";

test("balance initializes at 10000", () => {
  expect(ATMService.balance).toBe(10000);
});

test("can't withdraw more than the limit", () => {
  expect(() => {
    ATMService.withdraw(5001);
  }).toThrow();
});

test("deposits correctly", () => {
  ATMService.deposit(5000);
  expect(ATMService.balance).toBe(15000);
});

test("can't withdraw more than the balance", () => {
  expect(() => {
    ATMService.withdraw(500000);
  }).toThrow();
});

test("can't withdraw a negative number", () => {
  expect(() => {
    ATMService.withdraw(-50);
  }).toThrow();
});
