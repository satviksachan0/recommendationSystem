// src/App.js
import React, { useState, useEffect } from 'react';
import QueryForm from './components/QueryForm';
import QueryRecommendation from './components/QueryRecommendation.js';
import { querySequences } from './data/queries';
import { buildMarkovChain, predictNextQuery } from './markov';
import { getSimilarQueries } from './collaborativeFiltering';

function App() {
  const [recommendations, setRecommendations] = useState([]);
  const [markovChain, setMarkovChain] = useState({});

  // Build Markov Chain on mount
  useEffect(() => {
    const chain = buildMarkovChain(querySequences);
    setMarkovChain(chain);
  }, []);

  const handleQuerySubmit = (query) => {
    // Get Markov-based predictions
    const markovRecommendations = predictNextQuery(markovChain, query);

    // Get Collaborative Filtering-based predictions
    const collaborativeRecommendations = getSimilarQueries(query);

    // Combine recommendations (60% Markov, 40% Collaborative Filtering)
    const hybridRecommendations = [
      ...markovRecommendations.slice(0, Math.ceil(markovRecommendations.length * 0.6)),
      ...collaborativeRecommendations.slice(0, Math.ceil(collaborativeRecommendations.length * 0.4))
    ];

    setRecommendations(hybridRecommendations);
  };

  return (
    <div className="App">
      <center><h1>VIT Vellore Query Recommendation System</h1></center>
      <QueryForm onSubmit={handleQuerySubmit} />
      {recommendations.length > 0 && (
        <QueryRecommendation recommendations={recommendations} />
      )}
    </div>
  );
}

export default App;