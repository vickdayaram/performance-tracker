import React, { Component } from 'react'
import { Search, Grid, Header } from 'semantic-ui-react'
import { StockData } from '../StockData'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash'
import { selectStock, addToWatchList,
         getChartData, checkForRestart,
         resetSelectForRestart,
         showAddMessage } from '../actions/index'

class UserInput extends Component {

  componentWillMount() {
    this.resetComponent()
    this.props.getChartData("BLK")
    this.props.checkForRestart()
    this.props.resetSelectForRestart()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => {
    let symbol = result.title
    let name = result.description
    let payload = { symbol: symbol, name: name }
    this.dispatchSelectAndGetChartData(symbol, payload)
    this.dispatchAddToWatchListAndShowAddMessage(symbol, payload)
    this.setState({ value: '' })
  }

  dispatchSelectAndGetChartData = (symbol, payload) => {
    this.props.selectStock(payload)
    this.props.getChartData(symbol)
  }

  dispatchAddToWatchListAndShowAddMessage = (symbol, payload) => {
    let existsIndx = _.findIndex(this.props.watchlist, (stock) => stock.symbol === symbol)
    if(existsIndx === -1){
    this.props.addToWatchList(payload)
    this.props.showAddMessage(symbol)
    }
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
          <div className="search">
            <Search
              loading={isLoading}
              onResultSelect={this.handleResultSelect}
              onSearchChange={this.handleSearchChange}
              results={results}
              value={value}
              fluid={true}
              size="huge"
              placeholder="Search by Company"
              {...this.props}
            />
          </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selected: state.selected,
    watchlist: state.watchlist
  }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({selectStock: selectStock,
                          addToWatchList: addToWatchList,
                          getChartData: getChartData,
                          checkForRestart: checkForRestart,
                          resetSelectForRestart: resetSelectForRestart,
                          showAddMessage: showAddMessage
                          },
                          dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserInput)
