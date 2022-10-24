import React from 'react'

import Router from 'next/router'
import Image from 'next/image'
import styles from '/styles/Dashboard.module.css'

import APIClient from '/services/APIClient';

export default function Dashboard({ token }) {
    const [balance, setBalance] = React.useState(5000);

    const [withdrawal, setWithdrawal] = React.useState(0);
    const [deposit, setDeposit] = React.useState(0);

    function handleWithdraw() {
        function onSuccess(newBalance) {
            setBalance(newBalance);
            alert('Withdrew successfully');
            setWithdrawal(0);
        }
        function onFailure() {
            alert('The withdrawal failed.')
        }
        if (withdrawal > balance) {
            alert('Not enough bones to withdraw.');
        } else {
            APIClient.withdraw(withdrawal, onSuccess, onFailure);
        }
    }

    function handleDeposit() {
        function onSuccess(newBalance) {
            setBalance(newBalance)
            alert('Deposited successfully.')
            setDeposit(0);
        }
        function onFailure() {
            alert('The deposit failed');
        }
        APIClient.deposit(deposit, onSuccess, onFailure);
    }

    React.useEffect(() => {
        function onSuccess(newBalance) {
            setBalance(newBalance);
        }

        if (!token) {
            Router.push('/')
        } else {
            APIClient.getBalance(onSuccess);
        }
    }, [token])

    function onWithdrawalChange(value) {
        const parsed = parseInt(value);
        if (!isNaN(parsed)){
            setWithdrawal(parsed)
        }
    }

    function onDepositChange(value) {
        const parsed = parseInt(value);
        if (!isNaN(parsed)){
            setDeposit(parsed)
        }
    }

    return (
        <div>
            <h1>Greetings, Aaron.</h1>
            <div>
                <Image 
                    src="/images/skelly.png" 
                    alt="skeleton" 
                    width="100"
                    height="100"
                />
            </div>
            <h2 className={styles.balance}>
                Current balance:
                <Image 
                    src="/images/bone.png"
                    alt="bones"
                    width="25"
                    height="25"
                />
                {balance}
            </h2>

            <input type="number" value={withdrawal} onChange={(e) => onWithdrawalChange(e.target.value)} />
            <button onClick={() => handleWithdraw()}>Withdraw</button>

            <br />

            <input type="number" value={deposit} onChange={(e) => onDepositChange(e.target.value)} />
            <button onClick={() => handleDeposit()}>Deposit</button>

            <div className={styles.walletContainer}>
                <Image 
                    src="/images/bone-pile.png"
                    alt="wallet"
                    width="270"
                    height="194"
                />
            </div>
        </div>
    )
}