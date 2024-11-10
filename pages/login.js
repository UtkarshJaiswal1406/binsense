import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import styles from "../styles/Login.module.css"; // Create a CSS file for styling
import Link from "next/link";
import Image from "next/image";
import Navbar from '../components/Navbar';


const LoginPage = () => {
  const { data: session, status } = useSession();

  // Redirect to dashboard if already logged in
  useEffect(() => {
    if (status === "authenticated") {
      window.location.href = "/dashboard";
    }
  }, [status]);

  return (
    <div className={styles.container}>
        <Navbar />
      {!session ? (
        <div className={styles.loginContent}>
          <h2>Login to Binsense</h2>
          <p>Sign in with your GitHub account to access the dashboard.</p>
          <button onClick={() => signIn("github")} className={styles.githubLoginButton}>
            Login with GitHub
          </button>
        </div>
      ) : (
        <div className={styles.loggedInContent}>
          <h2>Welcome, {session.user.name}</h2>
          <p>You are logged in with GitHub. Go to your dashboard or account settings.</p>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
