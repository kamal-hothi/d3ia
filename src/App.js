import React, { Component } from 'react';
import BarChart from './BarChart';
import ScatterPlot from './ScatterPlot';
import ScatterData from './scatterData';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>d3ia dashboard</h2>
        </div>
        <div>
          <BarChart data={[5,10,1,13,12,53,12,15,123]} size={[500,500]}/>
        </div>
        <div>
          <ScatterPlot data={ScatterData} size={[500,500]} />
        </div>
      </div>
    );
  }
}

export default App;
