import React from 'react';
import MainPage from './components/MainPage';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SubPage from './components/SubPage';
import HomeContent from './components/HomeContent';


function App() {
  return (
    <BrowserRouter> 
      <Routes>
      <Route path="/" element={<HomeContent />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/subpage" element={<SubPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
