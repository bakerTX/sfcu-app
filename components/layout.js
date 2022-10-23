import React from 'react';
import Link from 'next/link'
import styles from './layout.module.css'

export default function Layout({ children, token }) {
    return (
        <div className={styles.container}>
            <div className={styles.nav}>
                <Link href="/">Home</Link>
                <Link href={token ? '/dashboard' : '/login'}>{ token ? 'Dashboard' : 'Login' }</Link>
            </div>
            {children}
        </div>
    )
}