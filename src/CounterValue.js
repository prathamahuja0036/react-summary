import React from 'react'
import { useState } from 'react';
export const CounterValue = () => {

    let [counter, setcounter] = useState(5);

    const addvalue = () => {
        if (counter < 20) {
            setcounter(counter + 1);
        }
    };
    const removevalue = () => {
        if(counter>0)
        {
        setcounter(counter - 1)
        }
    };
    return (
        <>
            <h1>Counter Value:{counter}</h1>
            <button onClick={addvalue}>Add value</button>
            <button onClick={removevalue}>remove value</button>
        </>
    )
}
 export default CounterValue;