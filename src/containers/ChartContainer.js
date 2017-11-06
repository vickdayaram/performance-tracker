import React, { Component } from 'react';
import ChartHeader from '../components/ChartHeader'
import { Header, Segment, Loader, Message } from 'semantic-ui-react'
import Chart from '../components/Chart'
import { connect } from 'react-redux'

class ChartContainer extends Component {

  render() {
    return (
      <div>
          {this.props.chartData.inProcess ?
          <Loader active size='massive'> Fetching Most Recent Data </Loader>
          :
           null
          }

          {this.props.chartData.errors ?
          <Message textAlign="center" color="yellow">
            Oops! Something went wrong. Please try refreshing the page.
          </Message>
          :
          null
          }
          {this.props.chartData.data.length && !this.props.chartData.inProcess ?
          <div>
          <Header as="h3" inverted={true} attached="top" textAlign="center">
            < ChartHeader />
          </Header>
          < Segment attached>
          < Chart />
          </ Segment >
          </div>
          :
          null }
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
