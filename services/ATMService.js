const ATMService = {
  balance: 10000,
  limit: 5000,
  withdraw(amount) {
    if (amount < 0) {
      throw new Error("Cannot withdraw a negative amount.");
    }
    if (this.limit <= 0) {
      throw new Error("Daily limit reached.");
    }
    if (amount > this.limit) {
      throw new Error("Withdrawal amount is greater than daily limit.");
    }
    if (amount > this.balance) {
      throw new Error("Withdrawal exceeds current balance.");
    }

    this.balance = this.balance - amount;
    this.limit = this.limit - amount;
    return {
      balance: this.balance,
      message: "Withdrew successfully.",
    };
  },
  deposit(amount) {
    if (amount < 0) {
      throw new Error("Cannot deposit a negative amount.");
    }
    this.balance = this.balance + amount;
    return {
      balance: this.balance,
      message: "Deposited successfully.",
    };
  },
  resetLimit() {
    // cron job runs nightly at 12am
    // ...
  },
};

export default ATMService;
