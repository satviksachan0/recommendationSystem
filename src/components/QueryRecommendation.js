import React from 'react';

function QueryRecommendation({ queries }) {
  // You can add logic here to filter or sort queries if needed
  const recommendedQueries = queries.filter(query => query.isRecommended); // Example filter for recommended queries
  
  return (
    <div>
      <h2>Recommended Queries</h2>
      {recommendedQueries.length > 0 ? (
        <ul>
          {recommendedQueries.map((query, index) => (
            <li key={index}>
              <h3>{query.title}</h3>
              <p>{query.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recommendations available at the moment.</p>
      )}
    </div>
  );
}

export default QueryRecommendation;