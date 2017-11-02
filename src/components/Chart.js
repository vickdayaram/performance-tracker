import React, { Component } from 'react';
import { Line } from 'react-chartjs-2'
import { connect } from 'react-redux'

const chartData = {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderColor: [
                'rgba(255,99,132,1)'
            ],
            borderWidth: 1
        }]
    }


class Chart extends Component {

  render() {
    return (
      <div>
          < Line data={this.props.chartData.chartData} />
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
