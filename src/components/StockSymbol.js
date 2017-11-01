import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { deleteFromWatchList } from '../Actions/index'
import { bindActionCreators } from 'redux';

class StockSymbol extends Component {

  handleClick = () => {
    let symbol = this.props.stock.selected
    this.props.deleteFromWatchList(symbol)
  }

  render() {
    return (
      <div>
          { this.props.stock.selected } <Button circular icon="delete" onClick={this.handleClick} / >
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    stock: state.selected
  }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({deleteFromWatchList: deleteFromWatchList},
                          dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(StockSymbol)
