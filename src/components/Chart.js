import React, { Component } from 'react';
import { Line } from 'react-chartjs-2'
import { connect } from 'react-redux'
import { chartOptions } from '../helpers/ChartOptions'

class Chart extends Component {

 render() {
    return (
      <div>
            < Line data={this.props.chartData.chartData} options={chartOptions} />
      </div>
    );
  }

}

function mapStateToProps(state) {
    return {
        chartData: state.chartData
    };
}

export default connect(mapStateToProps)(Chart);;
