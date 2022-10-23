import React from 'react';
import Router from 'next/router';
import styles from '../styles/Login.module.css';

export default function Login() {
    const [pin, setPin] = React.useState([])

    function handleClick(num) {
        // add num to pin state
        const newPin = [...pin, num]
        setPin(newPin);
    }

    React.useEffect(() => {
        if (pin.length === 4) {
            // check validity of this pin
            fetch('/api/login', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    pin: pin.join('')
                })
            }
            ).then(res => res.json()).then(json => {
                // if success, proceed / redirect
                //...
                Router.push('/dashboard');
                console.log(json)
            })
            .catch(err => {
                // if error, clear pin and alert user
                alert('Boo! Try again');
                setPin([])
            })
        }
    }, [pin])

    return (
        <>
            <h2>Login to continue</h2>
            <div className={styles.loginGrid}>
                {[1,2,3,4,5,6,7,8,9].map(num => (
                    <button onClick={() => handleClick(num)} className={styles.button} key={`login-num-${num}`}>{num}</button>
                ))}
            </div>

            <div className={styles.flex}>
                {[0,1,2,3].map(num => (
                    <div key={`answer-slot-${num}`} className={styles.answerSlot}>{pin[num]}</div>
                ))}
            </div>
        </>
    )

}