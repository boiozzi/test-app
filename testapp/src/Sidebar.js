// src/components/Sidebar.jsx
import React from 'react';

const Sidebar = ({ steps, currentStep, onStepClick }) => {
  return (
    <div style={styles.sidebar}>
      <ul style={styles.ul}>
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = currentStep === stepNumber;

          return (
            <li
              key={stepNumber}
              style={{
                ...styles.li,
                ...(isActive ? styles.active : {})
              }}
              onClick={() => onStepClick(stepNumber)} 
            >
              Step {stepNumber}: {step.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const styles = {
  sidebar: {
    width: '200px',
    borderRight: '1px solid #ccc',
    minHeight: '100vh', 
    padding: '1rem',
    backgroundColor: '#f8f8f8'
  },
  ul: {
    listStyle: 'none',
    padding: 0,
  },
  li: {
    padding: '0.5rem 0',
    cursor: 'pointer',
  },
  active: {
    fontWeight: 'bold',
    color: 'blue'
  }
};

export default Sidebar;
