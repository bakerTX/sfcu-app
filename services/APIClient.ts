type SuccessCallback = (balance: string, message?: string) => void;
type LoginCallback = (token: string, name: string) => void;
type FailureCallback = (message: string) => void;

const APIClient = {
  login(pin: string, onSuccess: LoginCallback, onFailure: FailureCallback) {
    return fetch("/api/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        pin,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.status === 200) {
          onSuccess(json.token, json.name);
        } else {
          onFailure(json.message);
        }
      })
      .catch((e) => {
        onFailure(e);
      });
  },
  getBalance(onSuccess: SuccessCallback) {
    return fetch("/api/getBalance")
      .then((res) => res.json())
      .then((json) => {
        onSuccess(json.balance);
      });
  },
  withdraw(
    withdrawal: string,
    onSuccess: SuccessCallback,
    onFailure: FailureCallback
  ) {
    return fetch("/api/withdraw", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        withdrawal,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.status === 200) {
          onSuccess(json.balance, json.message);
        } else {
          onFailure(json.message);
        }
      })
      .catch((error) => {
        onFailure(error);
      });
  },
  deposit(
    deposit: string,
    onSuccess: SuccessCallback,
    onFailure: FailureCallback
  ) {
    return fetch("/api/deposit", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        deposit,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.status === 200) {
          onSuccess(json.balance, json.message);
        } else {
          onFailure(json.message);
        }
      })
      .catch((error) => {
        onFailure(error);
      });
  },
};

export default APIClient;
