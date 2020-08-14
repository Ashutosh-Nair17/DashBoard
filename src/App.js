import React from 'react';
import LeftNavBar from './LeftNavBar/LeftNavBar';
import DataCard from './Data/DataCard';
import BarChart from './BarChart';
import DataTable from './DataTable';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <LeftNavBar/>
      <DataCard/>
      <BarChart/>
      <DataTable/>
      <Footer/>
    </div>
  );
}

export default App;
