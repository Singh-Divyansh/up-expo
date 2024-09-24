// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Safezones from './components/Safezones';
import Rating from './components/Rating';
import Saferoute from './components/Saferoute';
import Police from './components/Police';

// const Home = () => <Safezones />;
// const About = () => <div>About Page</div>;
const Contact = () => <div>Contact Page</div>;

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ marginLeft: '250px', padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Safezones />} />
            <Route path="/rating" element={<Rating />} />
            <Route path="/saferoute" element={<Saferoute />} />
            <Route path="/police" element={<Police />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
