import React, { useState } from 'react';
import styles from '../styles/Dashboard.module.css';
import { motion } from 'framer-motion';

const demoDustbins = [
  { id: 1, location: "Arch Gate", fillPercentage: 45 },
  { id: 2, location: "University Block", fillPercentage: 70 },
  { id: 3, location: "Tech Park", fillPercentage: 30 },
  { id: 4, location: "Java Canteen", fillPercentage: 90 },
];

const Dashboard = () => {
  const [selectedDustbin, setSelectedDustbin] = useState(null);

  const handleDustbinClick = (dustbin) => {
    setSelectedDustbin(dustbin);
  };

  return (
    <div className={styles.dashboardContainer}>
      <header className={styles.header}>
        <h1>Binsense Analytics Dashboard</h1>
        <p className={styles.subtitle}>Real-time monitoring of smart dustbin fill levels</p>
      </header>

      <section className={styles.dustbinsContainer}>
        {demoDustbins.map((dustbin) => (
          <motion.div
            key={dustbin.id}
            className={styles.dustbinCard}
            onClick={() => handleDustbinClick(dustbin)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <h2>{dustbin.location}</h2>
            <DustbinFill fillPercentage={dustbin.fillPercentage} />
            <p>Fill Level: {dustbin.fillPercentage}%</p>
          </motion.div>
        ))}
      </section>

      {selectedDustbin && (
        <motion.section
          className={styles.detailsContainer}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2>Dustbin Details</h2>
          <p><strong>Location:</strong> {selectedDustbin.location}</p>
          <p><strong>Fill Percentage:</strong> {selectedDustbin.fillPercentage}%</p>
          <button
            onClick={() => setSelectedDustbin(null)}
            className={styles.closeButton}
          >
            Close
          </button>
        </motion.section>
      )}
    </div>
  );
};

const DustbinFill = ({ fillPercentage }) => {
  const getFillColor = () => {
    if (fillPercentage < 50) return "#28a745"; // Green for low fill
    if (fillPercentage < 80) return "#ffcc00"; // Yellow for medium fill
    return "#e62b45"; // Red for high fill
  };

  return (
    <div className={styles.dustbinIcon}>
      <motion.div
        className={styles.fill}
        style={{ height: `${fillPercentage}%`, backgroundColor: getFillColor() }}
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default Dashboard;
