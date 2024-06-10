import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const CodeDisplay = (props) => {
  console.log("props=>", props);
    const codestring=`this is a code string`
  return (
    <SyntaxHighlighter language='javascript' style={dracula}>
     {props?.code || codestring}
    </SyntaxHighlighter>
  )
}

export default CodeDisplay