import React, { useState } from 'react';

function MoodToggler() {
    const [count, setCount] = useState(0);
    let [isHappy, setIsHappy] = useState(true);
    const toggleIsHappy = () => setIsHappy(isHappy = false);
    return (
        
            <h3 onClick={toggleIsHappy}>{isHappy ? ":)" : ":("}</h3>
        
    )
}

export default MoodToggler;