const UserService = {
  users: {
    "1337": {
      name: "Aaron",
    },
  },
  getUser(pin: string) {
    return this.users[pin];
  },
};

export default UserService;
