import React, { Component } from 'react'
import { Table, Header, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import WatchListItem from '../components/WatchListItem'


class WatchListContainer extends Component {

  render(){
     return (
      <div className="watchListContainer">
         <Header as="h3" attached="top" inverted={true} textAlign="center"> WatchList </Header>
          <Table celled inverted selectable attached>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign="center"> Stock Ticker </Table.HeaderCell>
                <Table.HeaderCell textAlign="center"> Actions </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
            { this.props.watchlist.length ?
              this.props.watchlist.map((stock) => < WatchListItem stock={stock} />)
              :
              <Table.Row>
                <Table.Cell textAlign="center" vertialAlign="middle" colSpan="2">
                  Your WatchList is Empty
                </Table.Cell>
              </Table.Row>
              }
            </Table.Body>
            </Table>
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
