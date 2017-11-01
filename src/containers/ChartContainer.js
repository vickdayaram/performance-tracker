import React, { Component } from 'react';
import StockSymbol from '../components/StockSymbol'
import Chart from '../components/Chart'

class ChartContainer extends Component {

  render() {
    return (
      <div>
        < StockSymbol />
        < Chart />
      </div>
    );
  }
}



export default ChartContainer;
