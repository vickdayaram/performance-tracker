import React, { Component } from 'react'
import { connect } from 'react-redux'


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
