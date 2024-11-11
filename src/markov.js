export const buildMarkovChain = (sequences) => {
    const transitions = {};
  
    sequences.forEach(sequence => {
      sequence.forEach((query, index) => {
        if (index + 1 < sequence.length) {
          const nextQuery = sequence[index + 1];
          if (!transitions[query]) transitions[query] = {};
          if (!transitions[query][nextQuery]) transitions[query][nextQuery] = 0;
          transitions[query][nextQuery] += 1;
        }
      });
    });
  
    // Convert counts to probabilities
    Object.keys(transitions).forEach(query => {
      const total = Object.values(transitions[query]).reduce((sum, count) => sum + count, 0);
      Object.keys(transitions[query]).forEach(nextQuery => {
        transitions[query][nextQuery] /= total;
      });
    });
  
    return transitions;
  };
  export const predictNextQuery = (transitions, currentQuery) => { 
    const nextQueries = transitions[currentQuery];
    if (!nextQueries) return [];
    
    // Sort by probability and return top suggestions
    return Object.entries(nextQueries).sort((a, b) => b[1] - a[1]).map(([query]) => query);
    };
  
  
  