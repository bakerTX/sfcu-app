import Link from 'next/link'
import styles from './layout.module.css'

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <div className={styles.nav}>
                <Link href="/">Home</Link>
                <Link href="/login">Login</Link>
            </div>
            {children}
        </div>
    )
}