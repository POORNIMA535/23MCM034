import React from 'react';

const ResultsDisplay = ({ results }) => {
    if (!results) return null;

    return (
        <div>
            <h2>Results</h2>
            <p><strong>Previous State:</strong> {JSON.stringify(results.windowPrevState)}</p>
            <p><strong>Current State:</strong> {JSON.stringify(results.windowCurrState)}</p>
            <p><strong>Fetched Numbers:</strong> {JSON.stringify(results.numbers)}</p>
            <p><strong>Average:</strong> {results.avg}</p>
        </div>
    );
};

export default ResultsDisplay;