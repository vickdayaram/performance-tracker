import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { deleteFromWatchList } from '../Actions/index'
import { bindActionCreators } from 'redux';

class StockSymbol extends Component {

  render() {
    return (
      <div>
          { this.props.stock.selected } 
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    stock: state.selected
  }
}

export default connect(mapStateToProps)(StockSymbol)
