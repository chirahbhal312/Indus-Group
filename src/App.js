import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Ensure Routes is imported
import HomePage from './pages/HomePage';
import Indusenterprises from './pages/Indusenterprises';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Indusenterprises" element={<Indusenterprises />} />
          <Route path="/Indusb2b" element={<Page2 />} />
          <Route path="/MySkillsAcademy" element={<Page3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
