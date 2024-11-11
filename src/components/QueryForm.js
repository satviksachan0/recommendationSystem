// src/components/QueryForm.js
import React, { useState } from 'react';
import './QueryForm.css';

function QueryForm({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSubmit(query); // Pass the query to the parent component
      setQuery(''); // Reset the input field after submitting
    }
  };

  return (
    <div className="query-form">
      <h2>Submit Your Query</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter your query"
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default QueryForm;