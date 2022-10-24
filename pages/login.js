import React from "react";
import Router from "next/router";
import APIClient from "/services/APIClient";
import styles from "/styles/Login.module.css";

export default function Login({ setToken, setName }) {
  const [pin, setPin] = React.useState([]);

  function handleClick(num) {
    // add num to pin state
    const newPin = [...pin, num];
    setPin(newPin);
  }

  React.useEffect(() => {
    function onSuccess(token, name) {
      setToken(token);
      setName(name);
      Router.push("/dashboard");
    }

    function onFailure(message) {
      alert(message);
      setPin([]);
    }

    if (pin.length === 4) {
      // check validity of this pin
      APIClient.login(pin, onSuccess, onFailure);
    }
  }, [pin, setToken, setName]);

  return (
    <>
      <h2>Login to continue</h2>
      <div className={styles.loginGrid}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <button
            onClick={() => handleClick(num)}
            className={styles.button}
            key={`login-num-${num}`}
          >
            {num}
          </button>
        ))}
      </div>

      <div className={styles.flex}>
        {[0, 1, 2, 3].map((num) => (
          <div key={`answer-slot-${num}`} className={styles.answerSlot}>
            {pin[num]}
          </div>
        ))}
      </div>
    </>
  );
}
