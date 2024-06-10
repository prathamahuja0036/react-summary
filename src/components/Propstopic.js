import React from 'react'
import CodeDisplay from './CodeDisplay';

export const Propstopic = () => {
  const codeToDisplay=`function Car(props) {
    return <h2>I am a { props.brand }!</h2>;
  }
  
  function Garage() {
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <Car brand="Ford" />
      </>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Garage />);`
  return (
    <div>
      <h1>Props in react</h1>
      <p>Props are arguments passed into React components.
       Props are passed to components via HTML attributes</p>
       <p>React Props are like function arguments in JavaScript and attributes in HTML.
To send props into a component, use the same syntax as HTML attributes:</p>
<CodeDisplay code={codeToDisplay}/>
    </div>
  )
}
export default Propstopic;