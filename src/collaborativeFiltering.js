// src/collaborativeFiltering.js

export const getSimilarQueries = (query) => {
    // For simplicity, we return a fixed set of queries for now.
    // You can replace this with actual collaborative filtering logic.
    return [
      { title: "What is React?", description: "Introduction to React" },
      { title: "How to use JSX?", description: "Learn JSX in React" },
      // Add more queries as necessary
    ];
  };