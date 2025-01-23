// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
// import Dashboard from "./components/Dashboard";
// import Section1 from "./components/Section1";
// import Section2 from "./components/Section2";

// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route
//             path="/create-report"
//             element={
//               <div style={{ display: "flex", minHeight: "100vh" }}>
//                 <Sidebar
//                   steps={[
//                     { title: "Applicant Details", path: "/create-report" },
//                     { title: "Current Residency", path: "/section2" },
//                   ]}
//                   currentStep={1}
//                   onStepClick={() => {}}
//                 />
//                 <div style={{ flex: 1, padding: "20px" }}>
//                   <Section1 />
//                 </div>
//               </div>
//             }
//           />
//           <Route
//             path="/section2"
//             element={
//               <div style={{ display: "flex", minHeight: "100vh" }}>
//                 <Sidebar
//                   steps={[
//                     { title: "Applicant Details", path: "/create-report" },
//                     { title: "Current Residency", path: "/section2" },
//                   ]}
//                   currentStep={2}
//                   onStepClick={() => {}}
//                 />
//                 <div style={{ flex: 1, padding: "20px" }}>
//                   <Section2 />
//                 </div>
//               </div>
//             }
//           />
//           {/* Add more sections here */}
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create-report" element={<Layout currentStep={1} component={<Section1 />} />} />
          <Route path="/section2" element={<Layout currentStep={2} component={<Section2 />} />} />
          {/* Add more sections here */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

const Layout = ({ currentStep, component }) => {
  const navigate = useNavigate();

  const steps = [
    { title: "Applicant Details", path: "/create-report" },
    { title: "Current Residency", path: "/section2" },
    // Add more steps if needed
  ];

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar
        steps={steps}
        currentStep={currentStep}
        onStepClick={(step) => navigate(step.path)}
      />
      <div style={{ flex: 1, padding: "20px" }}>
        {component}
      </div>
    </div>
  );
};

export default App;
