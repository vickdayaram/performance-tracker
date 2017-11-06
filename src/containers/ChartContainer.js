import React, { Component } from 'react';
import ChartHeader from '../components/ChartHeader'
import { Header, Segment, Loader } from 'semantic-ui-react'
import Chart from '../components/Chart'
import { connect } from 'react-redux'

class ChartContainer extends Component {

  render() {
    return (
      <div>
        <Header as="h3" inverted={true} attached="top" textAlign="center">
          < ChartHeader />
        </Header>
        < Segment attached>
          {this.props.chartData.inProcess ?
          <Loader active size='large'> Fetching Most Recent Data </Loader>
          :
          < Chart />
          }
        </ Segment >
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        chartData: state.chartData
    };
}

export default connect(mapStateToProps)(ChartContainer);
