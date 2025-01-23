// import React, { useState } from "react";
// import { Table, Button, Form, InputGroup } from "react-bootstrap";

// const Dashboard = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   // Example Data (replace with your backend data)
//   const reports = [
//     {
//       instance: "LDS - 1",
//       state: "Open",
//       subject: "Priority",
//       step: "Environmental Specialist",
//       inStepSince: "Dec 7, 2023",
//       status: "Submitted",
//       responsible: "Farzad, Shiv, Trevor",
//     },
//     {
//       instance: "LDS - 2",
//       state: "Open",
//       subject: "High Priority",
//       step: "Environmental Manager Review",
//       inStepSince: "Dec 7, 2023",
//       status: "Submitted",
//       responsible: "Trevor, Elaine",
//     },
//   ];

//   // Filtered data based on the search term
//   const filteredReports = reports.filter((report) =>
//     report.subject.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="container mt-4">
//       <h2>Project Processes</h2>

//       {/* Search Bar */}
//       <InputGroup className="mb-3">
//         <Form.Control
//           placeholder="Search by subject..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <Button variant="primary">Search</Button>
//       </InputGroup>

//       {/* Table */}
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Instance</th>
//             <th>State</th>
//             <th>Subject</th>
//             <th>Step</th>
//             <th>In Step Since</th>
//             <th>Status</th>
//             <th>Responsible Actors</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredReports.map((report, index) => (
//             <tr key={index}>
//               <td>{report.instance}</td>
//               <td>
//                 <span className="badge bg-warning text-dark">{report.state}</span>
//               </td>
//               <td>{report.subject}</td>
//               <td>{report.step}</td>
//               <td>{report.inStepSince}</td>
//               <td>{report.status}</td>
//               <td>{report.responsible}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//       {/* Button to Start Process */}
//       <Button variant="success" className="mt-3">
//         Start New Process
//       </Button>
//     </div>
//   );
// };

// export default Dashboard;
import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleStartNewProcess = () => {
    navigate("/create-report");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Project Processes</h2>
      {/* Example Filter */}
      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="Search by subject..."
          style={{ padding: "5px", marginRight: "5px" }}
        />
        <button className="btn btn-primary">Search</button>
      </div>
      {/* Example Table */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Instance</th>
            <th>State</th>
            <th>Subject</th>
            <th>Step</th>
            <th>In Step Since</th>
            <th>Status</th>
            <th>Responsible Actors</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>LDS - 1</td>
            <td>Open Priority</td>
            <td>Environmental Specialist</td>
            <td>Dec 7, 2023</td>
            <td>Submitted</td>
            <td>Farzad, Shiv, Trevor</td>
          </tr>
          <tr>
            <td>LDS - 2</td>
            <td>Open High Priority</td>
            <td>Environmental Manager Review</td>
            <td>Dec 7, 2023</td>
            <td>Submitted</td>
            <td>Trevor, Elaine</td>
          </tr>
        </tbody>
      </table>
      {/* "Start New Process" Button */}
      <button
        className="btn btn-success"
        onClick={handleStartNewProcess}
        style={{ marginTop: "15px" }}
      >
        Start New Process
      </button>
    </div>
  );
}

export default Dashboard;
