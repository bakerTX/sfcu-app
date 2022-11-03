import React from "react";
import Router from "next/router";
import APIClient from "@/services/APIClient";
import styles from "/styles/Login.module.css";

interface Props {
  setToken: (token: string) => {};
  setName: (name: string) => {};
}

export default function Login({ setToken, setName }: Props) {
  const [pin, setPin] = React.useState<Array<string>>([]);

  function handleClick(key: string) {
    const newPin = [...pin, key];
    setPin(newPin);
  }

  React.useEffect(() => {
    if (pin.length === 4) {
      APIClient.login(
        pin.join(""),
        (token: string, name: string) => {
          setToken(token);
          setName(name);
          Router.push("/dashboard");
        },
        (message: string) => {
          alert(message);
          setPin([]);
        }
      );
    }
  }, [pin, setToken, setName]);

  return (
    <>
      <h2>Login to continue</h2>
      <div className={styles.loginGrid}>
        {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((key) => (
          <button
            onClick={() => {
              handleClick(key);
            }}
            className={styles.button}
            key={`login-key-${key}`}
          >
            {key}
          </button>
        ))}
      </div>

      <div className={styles.flex}>
        {[0, 1, 2, 3].map((key) => (
          <div key={`answer-slot-${key}`} className={styles.answerSlot}>
            {pin[key]}
          </div>
        ))}
      </div>
    </>
  );
}
