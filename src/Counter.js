import React, { useState } from 'react';

function Counter({step = 1}) {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + step)}>step</button>
           
        </div>
    )
}

export default Counter;