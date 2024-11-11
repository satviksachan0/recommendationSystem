// src/markov.js

export const buildMarkovChain = (sequences) => {
  const chain = {};

  sequences.forEach((sequence) => {
    for (let i = 0; i < sequence.length - 1; i++) {
      const currentQuery = sequence[i];
      const nextQuery = sequence[i + 1];

      if (!chain[currentQuery]) {
        chain[currentQuery] = [];
      }
      chain[currentQuery].push(nextQuery);
    }
  });

  return chain;
};

export const predictNextQuery = (markovChain, query) => {
  const possibleNextQueries = markovChain[query];
  if (!possibleNextQueries) return [];

  // Randomly select the next query from the possible next queries
  const randomIndex = Math.floor(Math.random() * possibleNextQueries.length);
  return [possibleNextQueries[randomIndex]];
};