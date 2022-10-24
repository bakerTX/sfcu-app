const UserService = {
    users: {
        '1337': {
            name: 'Aaron',
        },
    },
    getUser(pin) {
        return this.users[pin];
    }
}

export default UserService;