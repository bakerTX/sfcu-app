import React, { ReactNode } from "react";
import Link from "next/link";
import styles from "./layout.module.css";

interface Props {
  children: ReactNode;
  token: string;
}

export default function Layout({ children, token }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href={token ? "/dashboard" : "/login"}>
          {token ? "Dashboard" : "Login"}
        </Link>
      </div>
      {children}
    </div>
  );
}
