import React from "react";
import { useNavigate } from "react-router-dom";

function Section2() {
  const navigate = useNavigate();

  return (
    <div className="container py-4">
      <h2>Section 2 - Fish Design and DFO/AHPP Requirements</h2>
      {/* Form Fields */}
      <div className="mb-3">
        <label>Road Name/CS:</label>
        <input type="text" className="form-control" placeholder="Enter road name or CS..." />
      </div>
      <div className="mb-3">
        <label>Latitude:</label>
        <input type="text" className="form-control" placeholder="e.g. 55.6655" />
      </div>
      {/* Add more fields as needed */}
      
      {/* Navigation Buttons */}
      <div className="d-flex justify-content-between mt-4">
        <button
          className="btn btn-secondary"
          onClick={() => navigate("/create-report")} // Navigate back to the previous section
        >
          Back
        </button>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/section3")} // Navigate to the next section (update route as needed)
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Section2;
