import React from 'react';

function Greeter({name, excitement = 1, age = 21}) {
    const greet = () => {
        alert(`Hello there, ${name}`)
    }
    return (
        <>
            <h1>Hi there, {name}{"!".repeat(excitement)}</h1>
            <p>You are {age}</p>
            <button onClick={greet}>Click Me</button>
        </>
    ) 
    
    
}

export default Greeter;