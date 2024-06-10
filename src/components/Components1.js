import React from 'react'
import CodeDisplay from './CodeDisplay'
export const Components1 = () => {
  const codeToDisplay=`class Car extends React.Component {
    render() {
      return <h2>Hi, I am a Car!</h2>;
    }
  }`
  const codeToDisplay1=`function Car() {
    return <h2>Hi, I am a Car!</h2>;
  }`
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
<CodeDisplay code={codeToDisplay} />
<h3>Function Component</h3>
<p>Here is the same example as above, but created using a Function component instead.</p>
<br/>
<p>A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code, are easier to understand, and will be preferred in this tutorial.</p>
<CodeDisplay code={codeToDisplay1} />
    </div>
  )
}
export default Components1;