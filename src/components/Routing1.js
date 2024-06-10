import React from 'react'
import CodeDisplay from './CodeDisplay';

export const Routing1 = () => {
  const codeToDisplay=`import ReactDOM from "react-dom/client";
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import Layout from "./pages/Layout";
  import Home from "./pages/Home";
  import Blogs from "./pages/Blogs";
  import Contact from "./pages/Contact";
  import NoPage from "./pages/NoPage";
  
  export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);`
  const codecmd=`npm i -D react-router-dom`
  return (
    <div>
      <h1>React Router</h1>
      <p>Create React App doesn't include page routing.</p>
      <p> React Router is the most popular solution.</p>
      <h2>Add React Router</h2>
      <p>To add React Router in your application, run this in the terminal from the root directory of the application:</p>
      <CodeDisplay code={codecmd}/>
      <h2>Folder Structure</h2>
      <p>To create an application with multiple page routes, let's first start with the file structure.</p>
      <p>Within the src folder, we'll create a folder named pages with several files:</p>
      <p>src\pages\:</p>
      <ul>
        <li>Layout.js</li>
        <li>Home.js</li>
        <li>Blogs.js</li>
        <li>Contact.js</li>
        <li>NoPage.js</li>
      </ul>
      <p>Each file will contain a very basic React component.</p>
      <h2>Basic Usage</h2>
      <p>Now we will use our Router in our index.js file.</p>
      <h4>Example:</h4>
      <CodeDisplay code={codeToDisplay}/>
      <h2>Example Explained</h2>
      <p>We wrap our content first with <b>BrowserRouter</b>.</p>
      <p>Then we define our <b>Routes</b>. An application can have multiple <b>Routes</b>. Our basic example only uses one.</p>
<br/>
<b>Routes</b>can be nested. The first <b>Routes</b> has a path of / and renders the Layout component.
<br/>
The nested <b>Routes</b> inherit and add to the parent route. So the blogs path is combined with the parent and becomes /blogs.
<br/>
The Home component route does not have a path but has an index attribute. That specifies this route as the default route for the parent route, which is /.
<br/>
<p>Setting the path to * will act as a catch-all for any undefined URLs. This is great for a 404 error page.</p>
<h2>Pages / Components</h2>
<p>The Layout component has <b>Outlet</b> and <b>Link</b> elements.</p>
<p>The <b>Outlet</b> renders the current route selected.</p>
<p><b>Link</b> is used to set the URL and keep track of browsing history.</p>
<p>Anytime we link to an internal path, we will use <b>Link</b> instead of <b>a href="".</b></p>
<p>The "layout route" is a shared component that inserts common content on all pages, such as a navigation menu.</p>
</div>
  
  )}
export default Routing1;