import UserService from "../services/UserService";

test("finds a user", () => {
  expect(UserService.getUser(1337)).toHaveProperty("name", "Aaron");
});

test("returns undefined for invalid pins", () => {
  expect(UserService.getUser(1111)).toBeUndefined();
});
