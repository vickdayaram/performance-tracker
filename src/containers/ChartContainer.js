import React, { Component } from 'react';
import ChartHeader from '../components/ChartHeader'
import { Header, Segment } from 'semantic-ui-react'
import Chart from '../components/Chart'

class ChartContainer extends Component {

  render() {
    return (
      <div>
        <Header as="h3" inverted={true} attached="top" textAlign="center">
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
