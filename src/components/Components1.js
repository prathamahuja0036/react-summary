import React from 'react'

export const Components1 = () => {
  return (
    <div>
    <h1>Components in react</h1>
    <p>Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.</p>
<h4>Create Your First Component</h4>
<p>When creating a React component, the component's name MUST start with an upper case letter.</p>
<h4>Class Component</h4>
<p>A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.
The component also requires a render() method, this method returns HTML.</p>
    </div>
  )
}
export default Components1;