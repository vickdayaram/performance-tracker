import React, { Component } from 'react';
import ChartHeader from '../components/ChartHeader'
import Chart from '../components/Chart'
import { Header, Segment } from 'semantic-ui-react'

class ChartContainer extends Component {

  render() {
    return (
      <div>
        <Header as="h3" attached="top" inverted={true} textAlign="center">
          < ChartHeader />
        </Header>
        < Segment attached>
          < Chart />
        </ Segment >
      </div>
    );
  }
}

export default ChartContainer;
