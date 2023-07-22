import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Table from './components/Table';
import Home from './components/Home';
import Graph from './components/Graph';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='table' element={<Table />} />
      <Route path='chart' element={<Graph />} />
    </Routes>
  );
};

export default App;
