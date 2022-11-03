const ATMService = {
  balance: 10000,
  limit: 5000,
  withdraw(amount: string) {
    const numAmount = parseInt(amount);
    if (numAmount < 0) {
      throw new Error("Cannot withdraw a negative amount.");
    }
    if (this.limit <= 0) {
      throw new Error("Daily limit reached.");
    }
    if (numAmount > this.limit) {
      throw new Error("Withdrawal amount is greater than daily limit.");
    }
    if (numAmount > this.balance) {
      throw new Error("Withdrawal exceeds current balance.");
    }

    this.balance = this.balance - numAmount;
    this.limit = this.limit - numAmount;
    return {
      balance: this.balance,
      message: "Withdrew successfully.",
    };
  },
  deposit(amount: string) {
    const numAmount = parseInt(amount);
    if (numAmount < 0) {
      throw new Error("Cannot deposit a negative amount.");
    }
    this.balance = this.balance + numAmount;
    return {
      balance: this.balance,
      message: "Deposited successfully.",
    };
  },
  resetLimit() {
    this.limit = 5000;
  },
  getBalance() {
    return String(this.balance);
  },
};

export default ATMService;
