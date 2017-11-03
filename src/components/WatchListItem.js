import React, { Component } from 'react'
import { Feed, Table } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { selectStock } from '../Actions/index'
import { deleteFromWatchList } from '../Actions/index'
import { getChartData } from '../Actions/index'
import { bindActionCreators } from 'redux';
import { Button } from 'semantic-ui-react'

class WatchListItem extends Component {

  handleSelect = () => {
    let symbol = this.props.stock.symbol
    let name = this.props.stock.name
    let payload = {
      symbol: symbol,
      name: name
    }
    this.props.selectStock(payload)
    this.props.getChartData(symbol)
  }

  handleDelete = () => {
    let symbol = this.props.stock.symbol
    let name = this.props.stock.name
    let payload = {
      symbol: symbol,
      name: name
    }
    this.props.deleteFromWatchList(payload)
  }

  handleInfo = () => {
    window.open(`http://www.nasdaq.com/symbol/${this.props.stock.symbol}`, '_blank')
  }

  render(){
     return (
         <Table.Row>
          <Table.Cell textAlign="center" onClick={this.handleInfo}> {this.props.stock.symbol} </Table.Cell>
          <Table.Cell textAlign="center">
            <Button onClick={this.handleSelect} positive circular icon='line chart'/>
            <Button onClick={this.handleDelete} negative circular icon='delete'/>
          </Table.Cell>
         </Table.Row>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    watchlist: state.watchlist
  }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({selectStock: selectStock,
                              getChartData: getChartData,
                              deleteFromWatchList: deleteFromWatchList},
                          dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(WatchListItem)
