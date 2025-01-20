import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Section1 from './Section1';
import logo from './assets/images/logo.png';

function App() {
  const steps = [
    { title: 'Applicant Details' },
    { title: 'Current Residency' },
    { title: 'Settlement Destination' },
  ];

  const [currentStep, setCurrentStep] = useState(1);

  const handleStepClick = (stepNumber) => {
    setCurrentStep(stepNumber);
  };

  return (
    <div>
      {/* Green Banner */}
      <div style={{ backgroundColor: '#0b6623', padding: '10px 20px', display: 'flex', alignItems: 'center' }}>
        <img
          src={logo}
          alt="Logo"
          style={{ width: '170px', height: 'auto', marginRight: '15px' }}
        />
        <h1 style={{ color: 'white', margin: 0, fontSize: '1.8rem' }}>Welcome to Our App</h1>
      </div>

      {/* Main Content */}
      <div className="d-flex">
        <Sidebar
          steps={steps}
          currentStep={currentStep}
          onStepClick={handleStepClick}
        />
        <Section1 />
        <div className="flex-grow-1 p-4">
          <h2>Current Step: {currentStep}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
