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

  format(){
    return `$${this.y} on ${this.x}`
  }


  render(){

    return (
        <div className="app">
          <HighchartsChart >
            <Chart height={600}/>
            <Tooltip crosshairs={true} formatter={this.format}/>
            <Title align="right"> Historical Performance </Title>

            <Subtitle align="right">Source: alphavantage.com </Subtitle>

            <Legend layout="horizontal" align="top" verticalAlign="top" />

            <XAxis categories={this.props.chartData.labels} >
              <XAxis.Title>Time</XAxis.Title>
            </XAxis>

            <YAxis id="number" >
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
