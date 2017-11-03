import React, { Component } from 'react';
import Highcharts from 'highcharts/highstock';
import { connect } from 'react-redux'
import formatCurrency from 'format-currency'
import { HighchartsChart,
          Tooltip, Chart,
          withHighcharts,
          XAxis, YAxis,
          Title, Subtitle,
          Legend, stockChart,
          LineSeries, Labels } from 'react-jsx-highcharts';

const options = { format: '%s%v', symbol: '$' }

class ChartComponent extends Component {

  formatCrossHairs(){
    return `${formatCurrency(this.y, options)} on ${this.x}`
  }

  formatYAxis(){
    return {formatter: function() {
            return formatCurrency(this.value, options)
        }
      }
  }

  render(){

    return (
        <div>
          <HighchartsChart >

            <Title align="right"> Historical Performance </Title>
            <Subtitle align="right"> Source: alphavantage.com </Subtitle>
            <Legend layout="horizontal" align="top" verticalAlign="top" />

            <Chart height={600}/>
            <Tooltip crosshairs={true} formatter={this.formatCrossHairs}/>


            <XAxis categories={this.props.chartData.labels}>
              <XAxis.Title>Time</XAxis.Title>
            </XAxis>

            <YAxis id="number"
                  labels={this.formatYAxis()}>
              <YAxis.Title>Stock Price</YAxis.Title>
              <LineSeries id="Stock Price" name={this.props.stock.selected} data={this.props.chartData.data} />
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
