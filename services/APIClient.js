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
            if (json.status === 200){
                onSuccess(json.token, json.name);
            } else {
                onFailure(json.message);
            }
        })
        .catch(e => {
            onFailure(e);
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
            if (json.status === 200){
                onSuccess(json.balance, json.message)
            } else {
                onFailure(json.message)
            }
        })
        .catch(error => {
            onFailure(error)
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
            if (json.status === 200){
                onSuccess(json.balance, json.message)
            } else {
                onFailure(json.message);
            }
        })
        .catch(error => {
            onFailure(error)
        })
    }
}

export default APIClient;