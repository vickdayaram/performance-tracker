import React, { Component } from 'react'
import { Feed } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { selectStock } from '../Actions/index'
import { deleteFromWatchList } from '../Actions/index'
import { getChartData } from '../Actions/index'
import { bindActionCreators } from 'redux';
import { Button } from 'semantic-ui-react'

class WatchList extends Component {

  renderWatchlist = () => {
    let watchlist = this.props.watchlist.map((stock) => {
    return (
      <Feed.Content onClick={this.handleClick} >
        <div>  {stock.symbol} <Button circular icon='line chart'/> </div>
      </Feed.Content> ) })
    return watchlist
  }

  handleClick = (event) => {
    let symbol = event.target.innerText.trim()
    this.props.selectStock(symbol)
    this.props.getChartData(symbol)
  }

  render(){
     return (
      <div>
       <div> WatchList </div>
        {this.props.watchlist.length ?
        <Feed>
          { this.renderWatchlist() }
        </Feed>
        : null }
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    watchlist: state.watchlist
  }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectStock: selectStock,
                              getChartData: getChartData},
                          dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(WatchList)
