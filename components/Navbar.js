
import React from 'react';
import styles from '../styles/LandingPage.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { signIn, useSession, signOut } from 'next-auth/react';

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>Binsense</h1>
      <ul className={styles.navLinks}>
        <li>
            <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;