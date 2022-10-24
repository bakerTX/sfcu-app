import Link from 'next/link'
import styles from '/styles/Home.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.tagline}>
        <div className={styles.hrContainer}>
          <hr />
        </div>
        <p>Spooky Federal Credit Union</p>
        <div className={styles.hrContainer}>
          <hr />
        </div>
      </div>
      <h1 className={styles.title}>
        Welcome to <Link href="/">SFCU!</Link>
      </h1>

      <Link href="/login">
        <a className={styles.linkbutton}>Log In</a>
      </Link>

    </main>
  )
}
