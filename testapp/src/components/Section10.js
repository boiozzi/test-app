import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css'; // Import global styles

function Section10() {
  const navigate = useNavigate();
  const apiUrl = 'https://obscure-space-cod-q54w6v574v5f9q4q-8080.app.github.dev/api/section10';

  const [formData, setFormData] = useState({
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(apiUrl, formData);
      if (response.status === 200) {
        alert('Data submitted successfully!');
        navigate('/');
      } else {
        alert('Failed to submit data');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('An error occurred while submitting the form');
    }
  };

  return (
    <div className="section-container">
      {/* Back to Dashboard Button */}
      <button className="btn btn-secondary back-button" onClick={() => navigate('/')}>
        Back to Dashboard
      </button>

      <h2 className="section-title">Section 10 - Additional Permits</h2>

      <form onSubmit={handleSubmit}>
        {/* Row 1: Comments */}
        <div className="row">
          <div className="field">
            <label>Additional Permits Comments:</label>
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter comments..."
            />
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Section10;
