import React from 'react'

import Router from 'next/router'
import Image from 'next/image'
import styles from '/styles/Dashboard.module.css'

import APIClient from '/services/APIClient';

export default function Dashboard({ token, name }) {
    const [balance, setBalance] = React.useState(0);

    const [withdrawal, setWithdrawal] = React.useState(0);
    const [deposit, setDeposit] = React.useState(0);

    function handleWithdraw() {
        function onSuccess(newBalance, message) {
            setBalance(newBalance);
            alert(message);
            setWithdrawal(0);
        }
        function onFailure(message) {
            alert(message);
        }
        if (withdrawal > balance) {
            alert('Withdrawal amount is greater than daily limit.');
        } else {
            APIClient.withdraw(withdrawal, onSuccess, onFailure);
        }
    }

    function handleDeposit() {
        function onSuccess(newBalance, message) {
            setBalance(newBalance)
            alert(message)
            setDeposit(0);
        }
        function onFailure(message) {
            alert(message);
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
        <div className={styles.container}>
            <h1>Greetings, {name}.</h1>
            <div>
                <Image 
                    src="/images/skelly.png" 
                    alt="skeleton" 
                    width="150"
                    height="150"
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

            <div className={styles.controls}>
                <div className={styles.control}>
                    <input
                        className={styles.input}
                        type="number"
                        value={withdrawal} 
                        onChange={(e) => onWithdrawalChange(e.target.value)} />
                    <button 
                        className={styles.button} 
                        onClick={() => handleWithdraw()}>
                        Withdraw
                    </button>
                </div>

                <div className={styles.control}>
                    <input 
                        className={styles.input}
                        type="number" 
                        value={deposit} 
                        onChange={(e) => onDepositChange(e.target.value)} />
                    <button 
                        className={styles.button} 
                        onClick={() => handleDeposit()}>
                        Deposit
                    </button>
                </div>
            </div>

            <div className={styles.footerContainer}>
                <Image 
                    src="/images/fireburning.gif"
                    alt="fire"
                    width="100"
                    height="185"
                />
                <div className={styles.bones}>
                    <Image 
                        src="/images/bone-pile.png"
                        alt="wallet"
                        width="270"
                        height="194"
                    />
                </div>
                <Image 
                    src="/images/fireburning.gif"
                    alt="fire"
                    width="100"
                    height="185"
                />
            </div>
        </div>
    )
}