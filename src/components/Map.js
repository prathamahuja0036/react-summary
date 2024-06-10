import React from 'react'
import CodeDisplay from './CodeDisplay';

export const Map = () => {
  const codeToDisplay=`const myArray = ['apple', 'banana', 'orange'];

  const myList = myArray.map((item) => <p>{item}</p>)`
  return (
    <div>
        <h1>Map</h1>
        <p>There are many JavaScript array methods.
One of the most useful in React is the .map() array method.
The .map() method allows you to run a function on each item in the array, returning a new array as the result.
In React, map() can be used to generate lists.</p>
<CodeDisplay code={codeToDisplay} />
    </div>
  )
}
export default Map ;