import React, { Component } from 'react'
import { Feed } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { selectStock } from '../Actions/index'
import { deleteFromWatchList } from '../Actions/index'
import { getChartData } from '../Actions/index'
import { bindActionCreators } from 'redux';
import { Button } from 'semantic-ui-react'

class WatchListItem extends Component {

  handleSelect = () => {
    let symbol = this.props.stock.symbol
    this.props.selectStock(symbol)
    this.props.getChartData(symbol)
  }

  handleDelete = () => {
    let symbol = this.props.stock.symbol
    this.props.deleteFromWatchList(symbol)
  }

  render(){
     return (
      <div>
         <Feed.Content onClick={this.handleClick} >
           <div>
                {this.props.stock.symbol}
                <Button onClick={this.handleSelect} positive circular icon='line chart'/>
                <Button onClick={this.handleDelete} negative circular icon='delete'/>
           </div>
         </Feed.Content>
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
                              getChartData: getChartData,
                              deleteFromWatchList: deleteFromWatchList},
                          dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(WatchListItem)
