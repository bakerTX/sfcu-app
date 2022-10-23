const ATMService = {
    balance: 10000,
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance = this.balance - amount;
            return this.balance;
        } else {
            throw new Error("Not enough money")
        }
    },
    deposit(amount) {
        this.balance = this.balance + amount;
        return this.balance;
    }
}

export default ATMService;