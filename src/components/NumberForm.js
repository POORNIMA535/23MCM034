import React, { useState } from 'react';

const NumberForm = ({ onSubmit }) => {
    const [numberId, setNumberId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(numberId);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Number ID:
                <input 
                    type="text" 
                    value={numberId} 
                    onChange={(e) => setNumberId(e.target.value)} 
                    placeholder="Enter 'p', 'f', 'e', or 'r'" 
                />
            </label>
            <button type="submit">Fetch Numbers</button>
        </form>
    );
};

export default NumberForm;