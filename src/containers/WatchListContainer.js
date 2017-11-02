import React, { Component } from 'react'
import { Table, Header, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import WatchListItem from '../components/WatchListItem'


class WatchListContainer extends Component {

  render(){
     return (
      <div>
         <Header as="h2" attached="top" inverted={true} textAlign="center"> WatchList </Header>
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

function mapStateToProps(state){
  return {
    watchlist: state.watchlist
  }
}

export default connect(mapStateToProps)(WatchListContainer)
