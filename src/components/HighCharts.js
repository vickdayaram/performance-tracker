import React, { Component } from 'react';
import Highcharts from 'highcharts/highstock';
import { HighchartsChart, withHighcharts, XAxis, YAxis, Title, Subtitle, Legend, stockChart, LineSeries, Labels } from 'react-jsx-highcharts';
import { connect } from 'react-redux'
import formatCurrency from 'format-currency'


export const options = { format: '%s%v', symbol: '$' }

const chartOptions = {
  yAxis: {
        labels: {
            formatter: function(){
              return this.y + "$"
            }
        }
    },
  xAxis: {
          type: 'datetime'
        },
};

class ChartComponent extends Component {


  render(){

    return (
        <div className="app">
          <HighchartsChart options={chartOptions}>

            <Title> Historical Performance </Title>

            <Subtitle>Source: alphavantage.com</Subtitle>

            <Legend layout="vertical" align="right" verticalAlign="middle" />

            <XAxis categories={this.props.chartData.chartData.labels} >
              <XAxis.Title>Time</XAxis.Title>
            </XAxis>

            <YAxis id="number" >
              <LineSeries id="Stock Price" name="Stock Price" data={this.props.chartData.chartData.data} />
            </YAxis>
          </HighchartsChart>
        </div>
      )

  }
}


function mapStateToProps(state) {
    return {
        chartData: state.chartData
    };
}

export default connect(mapStateToProps)(withHighcharts(ChartComponent, Highcharts));
