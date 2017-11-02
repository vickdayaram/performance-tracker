import React, { Component } from 'react'
import { Table, Header, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import WatchListItem from '../components/WatchListItem'


class WatchListContainer extends Component {

  render(){
     return (
      <div className="watchListContainer">
         <Header as="h3" attached="top" textAlign="center"> WatchList </Header>
          {this.props.watchlist.length ?
          <Segment attached>
            <Table celled inverted selectable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign="center"> Stock Ticker </Table.HeaderCell>
                <Table.HeaderCell textAlign="center"> Actions </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.watchlist.map((stock) => < WatchListItem stock={stock} />)}
            </Table.Body>
            </Table>
          </Segment>
          : null }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    watchlist: state.watchlist
  }
}

export default connect(mapStateToProps)(WatchListContainer)
