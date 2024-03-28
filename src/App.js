import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import History from './components/History';
import Routing1 from './components/Routing1';
import Propstopic from './components/Propstopic';
import Components1 from './components/Components1';
import CodeDisplay from './components/CodeDisplay';
import Map from './components/Map';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <HashLink  to="/  ">History</HashLink>
            </li>
            <li>
              <HashLink  to="/Components">Components</HashLink>
            </li>
            <li>
              <HashLink  to="/Routing">Routing</HashLink>
            </li>
            <li>
              <HashLink  to="/Props">Props</HashLink>
            </li>
            <li>
              <HashLink  to="/codestring">CodeString</HashLink>
            </li>
            <li>
              <HashLink  to="/Map">Map</HashLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" exact element={<History />} />
          <Route path="/Components" element={<Components1 />} />
          <Route path="/Routing" element={<Routing1 />} />
          <Route path="/Props" element={<Propstopic />} />
          <Route path="/codestring" element={<CodeDisplay />} />
          <Route path="/Map" element={<Map />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
