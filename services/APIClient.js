const APIClient = {
    login(pin, onSuccess, onFailure) {
        return fetch('/api/login', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                pin: pin.join('')
            })
        })
        .then(res => res.json())
        .then(json => {
            // if success, set dummy token
            onSuccess(json.token);
        })
        .catch(err => {
            // if error, clear pin and alert user
            onFailure();
        })
    },
    getBalance(onSuccess) {
        return fetch('/api/getBalance')
        .then(res => res.json())
        .then(json => {
            onSuccess(json.balance)
        })
    },
    withdraw(withdrawal, onSuccess, onFailure) {
        return fetch('/api/withdraw', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                withdrawal
            })
        })
        .then(res => res.json())
        .then(json => {
            onSuccess(json.balance)
        })
        .catch(error => {
            onFailure()
        })
    },
    deposit(deposit, onSuccess, onFailure) {
        return fetch('/api/deposit', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                deposit
            })
        })
        .then(res => res.json())
        .then(json => {
            onSuccess(json.balance)
        })
        .catch(error => {
            onFailure()
        })
    }
}

export default APIClient;