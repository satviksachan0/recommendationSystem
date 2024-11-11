// src/components/QueryRecommendation.js
import React from 'react';
import './QueryRecommendation.css';

function QueryRecommendation({ recommendations }) {
  return (
    <div className="recommendations-container">
      <h2>Recommended Queries</h2>
      <ul>
        {recommendations.map((query, index) => (
          <li key={index}>
            <h3>{query.title}</h3>
            <p>{query.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QueryRecommendation;