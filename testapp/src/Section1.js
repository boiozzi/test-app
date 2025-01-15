// Section1.js
import React from 'react';

function Section1() {
  return (
    <div style={styles.sectionContainer}>
      <h2>Section 1 - Project Location</h2>

      {/* Row 1: Road Name & Start at km */}
      <div style={styles.row}>
        <div style={styles.field}>
          <label>Road Name:</label>
          <input type="text" placeholder="Enter road name..." />
        </div>
        <div style={styles.field}>
          <label>Start at km:</label>
          <input type="text" placeholder="e.g. 12.5" />
        </div>
      </div>

      {/* Row 2: Starting Latitude & Longitude */}
      <div style={styles.row}>
        <div style={styles.field}>
          <label>Starting Point Latitude:</label>
          <input type="text" placeholder="e.g. 55.6655" />
        </div>
        <div style={styles.field}>
          <label>Starting Point Longitude:</label>
          <input type="text" placeholder="e.g. 103.2552" />
        </div>
      </div>

      {/* Row 3: Ending km, lat, long, etc. Add more as needed */}
      <div style={styles.row}>
        <div style={styles.field}>
          <label>End Point km:</label>
          <input type="text" placeholder="e.g. 20.0" />
        </div>
        <div style={styles.field}>
          <label>Ending Point Latitude:</label>
          <input type="text" placeholder="e.g. 55.7000" />
        </div>
        <div style={styles.field}>
          <label>Ending Point Longitude:</label>
          <input type="text" placeholder="e.g. 103.3000" />
        </div>
      </div>

      {/* Row 4: Nearest Town, PIDs, etc. */}
      <div style={styles.row}>
        <div style={styles.field}>
          <label>Nearest Town:</label>
          <input type="text" placeholder="Enter town name..." />
        </div>
        <div style={styles.field}>
          <label>PIDs:</label>
          <input type="text" placeholder="e.g. 12345" />
        </div>
      </div>
    </div>
  );
}

const styles = {
  sectionContainer: {
    padding: '1rem',
    fontFamily: 'Arial, sans-serif'
  },
  row: {
    /* This makes items sit side by side */
    display: 'flex',
    gap: '1rem', // space between columns
    marginBottom: '1rem',
    flexWrap: 'wrap', 
  },
  field: {
    /* Each field can grow/shrink to fit, or have a set width, etc. */
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '220px', // optional, so fields don’t get too narrow
  },
};

export default Section1;
