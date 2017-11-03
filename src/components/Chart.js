import React, { Component } from 'react';
import Highcharts from 'highcharts/highstock';
import { connect } from 'react-redux'
import formatCurrency from 'format-currency'
import { HighchartsChart,
          Tooltip, Chart,
          withHighcharts,
          XAxis, YAxis,
          Title, Subtitle,
          Legend, Series, Labels } from 'react-jsx-highstock';

const options = { format: '%s%v', symbol: '$' }

class ChartComponent extends Component {

  formatCrossHairs(){
    return `${formatCurrency(this.y, options)} on ${this.x}`
  }

  formatYAxis(){
    return { formatter: function() {
                  return formatCurrency(this.value, options)
            }
    }
  }

  setGradient(){
    return (
      { linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
              stops: [
                  [0, '#606060'],
                  [1, '#C0C0C0']
              ]
          }
      )
   }

  render(){

    return (
        <div>
          <HighchartsChart>

            <Title align="right"> Historical Performance </Title>
            <Subtitle align="right"> Source: alphavantage.com </Subtitle>
            <Legend layout="horizontal" align="top" verticalAlign="top" />

            <Chart plotBackgroundColor={this.setGradient()} height={600} />
            <Tooltip crosshairs={true} formatter={this.formatCrossHairs} valueDecimals={2}/>

            <XAxis categories={this.props.chartData.labels}>
              <XAxis.Title>Time</XAxis.Title>
            </XAxis>

            <YAxis id="number"
                  labels={this.formatYAxis()}>
              <YAxis.Title>Stock Price in USD</YAxis.Title>
              <Series id="Stock Price" color="#003366" name={this.props.stock.selected} data={this.props.chartData.data} />
            </YAxis>

          </HighchartsChart>
        </div>
      )
  }
}


const mapStateToProps = (state) => {
    return {
        chartData: state.chartData,
        stock: state.selected
    };
}

export default connect(mapStateToProps)(withHighcharts(ChartComponent, Highcharts));
