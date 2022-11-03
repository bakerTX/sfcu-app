const UserService = {
  users: [
    {
      name: "Aaron Baker",
      pin: "1337",
    },
  ],
  getUser(pin: string) {
    // Scan the array for a match
    // Optimize this later so that each login doesn't require a full scan of all users
    // ...
    const user = this.users.find((user) => user.pin === pin);
    return user;
  },
};

export default UserService;
