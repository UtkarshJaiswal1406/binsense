import React from 'react';
import styles from '../styles/LandingPage.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Link from 'next/link';

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <motion.h2
            className={styles.heroTitle}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to Binsense
          </motion.h2>
          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Smart waste management system to monitor and optimize waste disposal.
          </motion.p>
          <Link href="/more">
            <motion.button
              className={styles.ctaButton}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Learn More
            </motion.button>
          </Link>
        </div>
        <motion.div
          className={styles.heroImage}
          initial={{ opacity: 0, rotate: -10 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Image src="/dustbin-illustration.png" alt="Dustbin Illustration" width={500} height={500} />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <motion.h2
          className={styles.featuresTitle}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Key Features
        </motion.h2>
        <div className={styles.featureCards}>
          <motion.div
            className={styles.featureCard}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h3 className={styles.featureTitle}>Real-Time Monitoring</h3>
            <p>Track the fill levels of your bins in real time for better waste management.</p>
          </motion.div>
          <motion.div
            className={styles.featureCard}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h3 className={styles.featureTitle}>Alerts & Notifications</h3>
            <p>Receive alerts when bins are near full, ensuring timely collection.</p>
          </motion.div>
          <motion.div
            className={styles.featureCard}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h3 className={styles.featureTitle}>Analytics & Insights</h3>
            <p>Gain actionable insights to optimize waste disposal and reduce costs.</p>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <p>© 2024 Binsense. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
