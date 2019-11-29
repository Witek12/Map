import React from 'react';


const Input = ({ onInputChange, text,handleClick }) => (
    <div className="input">
        <input type="text"
            value={text}
            onChange={onInputChange}
        />
        <button onClick={handleClick}>Szukaj</button>
    </div>
)

export default Input