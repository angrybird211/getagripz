import React, { useState } from 'react';

const InputCount = () => {
    const [count, setCount] = useState(1);

    const minus = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    const plus = () => {
        setCount(count + 1);
    }

    return (
        <div className="input-count">
            <button onClick={minus}>-</button>
            <h4>{count}</h4>
            <button onClick={plus}>+</button>
        </div>
    )
}

export default InputCount;