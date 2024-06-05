import React, { useState } from 'react';
import axios from 'axios';
import NumberForm from './components/NumberForm';
import Resultsdisplay from './components/Resultsdisplay';

const App = () => {
    const [results, setResults] = useState(null);
    const [error, setError] = useState(null);

    const handleFetchNumbers = async (numberId) => {
        try {
            const response = await axios.get(`http://localhost:9876/e/${numberId}`);
            setResults(response.json());
            setError(null);
        } catch (err) {
            setError('Error fetching numbers. Please try again.');
            setResults(null);
        }
    };

    return (
        <div className="App">
            <h1>Average Calculator</h1>
            <NumberForm onSubmit={handleFetchNumbers} />
            {error && <p>{error}</p>}
            <Resultsdisplay results={results} />
        </div>
    );
};

export default App;
