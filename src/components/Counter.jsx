import React, { useState } from 'react';

const Counter = ({ fastMoveEnergy, chargeMoveEnergy }) => {
    const [count, setCount] = useState(0);

    const increment = (energy) => {
        setCount((prevCount) => Math.min(prevCount + energy, 100));
    };

    const decrement = (energy) => {
        setCount((prevCount) => Math.max(prevCount - energy, 0));
    };

    return (
        <div>
            <h2>{count}</h2>
            <p>
                <button onClick={() => increment(fastMoveEnergy)}>FM</button>
                <button onClick={() => decrement(chargeMoveEnergy)}>CM1</button>
                <button onClick={() => decrement(chargeMoveEnergy)}>CM2</button>
            </p>
            <p>
                <button onClick={() => decrement(fastMoveEnergy)}>Remove 1 FM</button>
            </p>
        </div>
    );
};

export default Counter;