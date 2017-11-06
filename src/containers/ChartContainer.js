import React, { Component } from 'react';
import ChartHeader from '../components/ChartHeader'
import { Header, Segment, Loader, Message } from 'semantic-ui-react'
import Chart from '../components/Chart'
import { connect } from 'react-redux'

class ChartContainer extends Component {

  chartDataArrivedWithNoErrorsAndProcessComplete = () => {
    return (
      this.props.chartData.data.length && !this.props.chartData.inProcess
      && !this.props.chartData.errors
    )
  }

  errorsReceivedAndProccessComplete = () => {
    return(
      this.props.chartData.errors && !this.props.chartData.inProcess
    )
  }

  render() {
    return (
      <div>
          {this.props.chartData.inProcess ?
          <Loader active size='massive'> Fetching Most Recent Data </Loader>
          :
           null
          }

          {this.errorsReceivedAndProccessComplete() ?
          <Message textAlign="center" color="yellow">
            Oops! Something went wrong. Please try refreshing the page. If the problem
            persists, we may not have this securities information available. Sorry about
            that.
          </Message>
          :
          null
          }
          {this.chartDataArrivedWithNoErrorsAndProcessComplete() ?
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
