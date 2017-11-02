import React, { Component } from 'react'
import { Feed } from 'semantic-ui-react'
import { connect } from 'react-redux'
import WatchListItem from '../components/WatchListItem'

class WatchListContainer extends Component {

  render(){
     return (
      <div>
         <div> WatchList </div>
          {this.props.watchlist.length ?
          <Feed>
            {this.props.watchlist.map((stock) => < WatchListItem stock={stock} />)}
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

export default connect(mapStateToProps)(WatchListContainer)
