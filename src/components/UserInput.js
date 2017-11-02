import React, { Component } from 'react'
import { Search, Grid, Header } from 'semantic-ui-react'
import { StockData } from '../StockData'
import { selectStock } from '../Actions/index'
import { addToWatchList } from '../Actions/index'
import { chartData } from '../Actions/index'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash'

const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo
`


class UserInput extends Component {

  componentWillMount() {
    this.resetComponent()
    this.getChartData("BLK")
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => {
    let symbol = result.title
    let name = result.description
    this.props.selectStock(symbol)
    this.props.addToWatchList(symbol)
    this.getChartData(symbol)
    this.setState({ value: result.title })
  }

  getChartData = (symbol) => {
  let url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=NKIEQH9ZHQ1ZFJVL
    `
    fetch(url)
    .then((res) => res.json())
    .then((json) => this.structureData(json))
  }

  structureData = (json) => {
    let selected
    let rawData = json["Time Series (Daily)"]
    let labels = Object.keys(rawData)
    let data = Object.values(rawData).map((value) => parseFloat(value["1. open"]))
    let chartData = {
                labels: labels.reverse(),
                datasets: [{
                backgroundColor: 'rgba(65,105,225, 0.5)',
                borderColor: 'rgb(0,0,139)',
                data: data.reverse(),
            }]
        }
    this.props.chartData(chartData)
  }

  handleSearchChange = (e, { value }) => {
   this.setState({ isLoading: true, value })

   setTimeout(() => {
     if (this.state.value.length < 1) return this.resetComponent()

     const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
     const isMatch = (result) => re.test(result.description)

     this.setState({
       isLoading: false,
       results: _.filter(StockData, isMatch),
     })
   }, 500)
 }

  render() {
    const { isLoading, value, results } = this.state

    return (
          <div>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={this.handleSearchChange}
            results={results}
            value={value}
            fluid={true}
            size="small"
            placeholder="Search by Company"
            {...this.props}
          />
          </div>
    )
  }
}



function mapStateToProps(state){
  return {
    selected: state.selected
  }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectStock: selectStock,
                          addToWatchList: addToWatchList,
                          chartData: chartData},
                          dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserInput)
