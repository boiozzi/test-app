// src/App.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Section1 from './Section1';

function App() {
  // Define some example steps
  const steps = [
    { title: 'Applicant Details' },
    { title: 'Current Residency' },
    { title: 'Settlement Destination' }
  ];

  // State for the current step (starting at step 1)
  const [currentStep, setCurrentStep] = useState(1);

  // Handler for when a step in the sidebar is clicked
  const handleStepClick = (stepNumber) => {
    setCurrentStep(stepNumber);
  };

  return (

    <div style={styles.container}>
      <Sidebar
        steps={steps}
        currentStep={currentStep}
        onStepClick={handleStepClick}
      />

      <Section1 />

      {/* Main content area */}
      <div style={styles.content}>
        <h1>Welcome to Our App</h1>
        <p>Current step: {currentStep}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    // The sidebar will be on the left, content on the right
    minHeight: '100vh'
  },
  content: {
    flex: 1,
    padding: '1rem'
  }
};

export default App;
