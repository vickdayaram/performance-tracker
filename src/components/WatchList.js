import React, { Component } from 'react'
import { Feed } from 'semantic-ui-react'
import { connect } from 'react-redux'

class WatchList extends Component {

  renderWatchlist = () => {
    let watchlist = this.props.watchlist.map((stock) => <li> {stock.symbol} </li> )
    return watchlist
  }

  render(){

     console.log(this.props.watchlist)
     return (
      <div>
       <div> WatchList </div>
        {this.props.watchlist.length ?
        this.renderWatchlist()
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

export default connect(mapStateToProps)(WatchList)
