import React from 'react'

import Image from 'next/image'
import styles from '../styles/Dashboard.module.css'

export default function Dashboard() {
    const [balance, setBalance] = React.useState(5000);
    const [wallet, setWallet] = React.useState(200);

    const [withdrawal, setWithdrawal] = React.useState(0);
    const [deposit, setDeposit] = React.useState(0);

    function handleWithdraw() {
        if (withdrawal > balance) {
            alert('Not enough bones to withdraw.');
        } else {
            setBalance(balance - parseInt(withdrawal));
            setWithdrawal(0);
    
            setWallet(wallet + parseInt(withdrawal));
        }
    }

    function handleDeposit() {
        if (deposit > wallet) {
            alert('Not enough bones to deposit.')
        } else {
            setBalance(balance + parseInt(deposit));
            setDeposit(0);
    
            setWallet(wallet - parseInt(deposit));
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

            <input type="number" value={withdrawal} onChange={(e) => setWithdrawal(e.target.value)} />
            <button onClick={() => handleWithdraw()}>Withdraw</button>

            <br />

            <input type="number" value={deposit} onChange={(e) => setDeposit(e.target.value)} />
            <button onClick={() => handleDeposit()}>Deposit</button>

            <div className={styles.walletContainer}>
                <p>Wallet: 
                    <Image 
                        src="/images/bone.png"
                        alt="bones"
                        width="25"
                        height="25"
                    />
                    {wallet}
                </p>
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