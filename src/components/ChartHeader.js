import React, { Component } from 'react'
import { connect } from 'react-redux'

class ChartHeader extends Component {

  render() {
    return (
      <div>
          { this.props.stock.name }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    stock: state.selected
  }
}

export default connect(mapStateToProps)(ChartHeader)
