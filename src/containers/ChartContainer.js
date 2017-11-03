import React, { Component } from 'react';
import ChartHeader from '../components/ChartHeader'
import Chart from '../components/Chart'
import { Header, Segment } from 'semantic-ui-react'
import HighCharts from '../components/HighCharts'

class ChartContainer extends Component {

  render() {
    return (
      <div>
        <Header as="h3" attached="top" textAlign="center">
          < ChartHeader />
        </Header>
        < Segment attached>
          < HighCharts />
        </ Segment >
      </div>
    );
  }
}

export default ChartContainer;
