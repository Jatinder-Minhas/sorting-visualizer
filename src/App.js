import React from 'react';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import Navbar from './SortingVisualizer/Navbar';
import Sidebar from './SortingVisualizer/Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <SortingVisualizer></SortingVisualizer>
    </div>
  );
}

export default App;