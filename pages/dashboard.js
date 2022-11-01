import React from "react";

import Router from "next/router";
import Image from "next/image";
import styles from "/styles/Dashboard.module.css";

import APIClient from "/services/APIClient";

export default function Dashboard({ token, name }) {
  const [balance, setBalance] = React.useState(0);

  const [withdrawal, setWithdrawal] = React.useState("");
  const [deposit, setDeposit] = React.useState("");

  function handleWithdraw() {
    function onSuccess(newBalance, message) {
      setBalance(newBalance);
      alert(message);
      setWithdrawal("");
    }
    function onFailure(message) {
      alert(message);
    }
    if (withdrawal > balance) {
      alert("Withdrawal amount is greater than daily limit.");
    } else {
      APIClient.withdraw(withdrawal, onSuccess, onFailure);
    }
  }

  function handleDeposit() {
    function onSuccess(newBalance, message) {
      setBalance(newBalance);
      alert(message);
      setDeposit(0);
    }
    function onFailure(message) {
      alert(message);
    }
    APIClient.deposit(deposit, onSuccess, onFailure);
  }

  // Check if user is logged in, otherwise kick them back to the homepage.
  // If they are logged in, query for their current balance.
  React.useEffect(() => {
    function onSuccess(newBalance) {
      setBalance(newBalance);
    }

    if (!token) {
      Router.push("/");
    } else {
      APIClient.getBalance(onSuccess);
    }
  }, [token]);

  function isNumerical(val) {
    return /[0-9]/.test(val);
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
        <Image src="/images/bone.png" alt="bones" width="25" height="25" />
        {balance}
      </h2>
      <p className={styles.limit}>Daily limit: 5000</p>

      <div className={styles.controls}>
        <div className={styles.control}>
          <input
            className={styles.input}
            type="number"
            value={withdrawal}
            onChange={(e) => setWithdrawal(e.target.value)}
            onKeyPress={(e) => {
              if (!isNumerical(e.key)) {
                e.preventDefault();
              }
            }}
          />
          <button className={styles.button} onClick={() => handleWithdraw()}>
            Withdraw
          </button>
        </div>

        <div className={styles.control}>
          <input
            className={styles.input}
            type="number"
            value={deposit}
            onChange={(e) => setDeposit(e.target.value)}
            onKeyPress={(e) => {
              if (!isNumerical(e.key)) {
                e.preventDefault();
              }
            }}
          />
          <button className={styles.button} onClick={() => handleDeposit()}>
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
  );
}
