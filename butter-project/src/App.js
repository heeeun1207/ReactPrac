import React from 'react';
import Main
from './components/Main';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SubPage from './components/SubPage';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter> 
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/subpage" element={<SubPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
