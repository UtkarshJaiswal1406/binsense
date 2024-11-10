import React from 'react';
import styles from '../styles/MorePage.module.css'; // Create this new CSS file
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../components/Navbar';

const MorePage = () => {
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
            Discover More About Binsense
          </motion.h2>
          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Learn about how our smart waste management system can help you optimize waste disposal and monitor your bins in real-time.
          </motion.p>
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
          Key Features of Binsense
        </motion.h2>
        <div className={styles.featureCards}>
          <motion.div
            className={styles.featureCard}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h3 className={styles.featureTitle}>Real-Time Monitoring</h3>
            <p>Track the fill levels of your bins in real-time for better waste management.</p>
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

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <motion.h2
          className={styles.benefitsTitle}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Why Choose Binsense?
        </motion.h2>
        <div className={styles.benefitsCards}>
          <motion.div
            className={styles.benefitCard}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h3 className={styles.benefitTitle}>Sustainability</h3>
            <p>Reduce carbon footprint by optimizing waste collection and reducing unnecessary trips.</p>
          </motion.div>
          <motion.div
            className={styles.benefitCard}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h3 className={styles.benefitTitle}>Cost Savings</h3>
            <p>Save money by only collecting bins when they are close to full, reducing fuel and labor costs.</p>
          </motion.div>
          <motion.div
            className={styles.benefitCard}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h3 className={styles.benefitTitle}>Data-Driven Decisions</h3>
            <p>Make smarter, data-driven decisions based on real-time insights about your waste management.</p>
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

export default MorePage;
