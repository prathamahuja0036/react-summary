import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const CodeDisplay = () => {
    const codestring=`<SyntaxHighlighter language='javascript' style={dracula}>
    <div>
    <h1>ROUTING</h1>
    <p>In ReactJS, routing is the process of determining which components to display based on the current URL or application state. This is commonly used in single-page applications (SPAs) where the entire UI is built using React components and navigation happens without full page reloads.</p>
    <p>One popular library for routing in ReactJS is React Router. React Router provides a declarative way to define routes in your application and map them to corresponding React components.</p>
    <h4>Here's a simple example demonstrating routing in a React application using React Router:</h4>
   </div>
</SyntaxHighlighter>
)`
  return (
    <SyntaxHighlighter language='javascript' style={dracula}>
        {codestring}

    </SyntaxHighlighter>
  )
}

export default CodeDisplay