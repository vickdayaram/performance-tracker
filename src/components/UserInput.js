import React, { Component } from 'react'
import { Search, Grid, Header } from 'semantic-ui-react'
import { StockData } from '../StockData'
import { selectStock } from '../Actions/index'
import { addToWatchList } from '../Actions/index'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash'

class UserInput extends Component {

  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => {
    let symbol = result.title
    let name = result.description
    this.props.selectStock(symbol)
    this.props.addToWatchList(symbol)
    this.setState({ value: result.title })
  }

  handleSearchChange = (e, { value }) => {
   this.setState({ isLoading: true, value })

   setTimeout(() => {
     if (this.state.value.length < 1) return this.resetComponent()

     const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
     const isMatch = (result) => re.test(result.description)

     this.setState({
       isLoading: false,
       results: _.filter(StockData, isMatch),
     })
   }, 500)
 }

  render() {
    const { isLoading, value, results } = this.state

    return (
          <div>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={this.handleSearchChange}
            results={results}
            value={value}
            fluid={true}
            size="small"
            placeholder="Search by Company"
            {...this.props}
          />
          </div>
    )
  }
}

function mapStateToProps(state){
  return {
    selected: state.selected
  }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectStock: selectStock,
                          addToWatchList: addToWatchList},
                          dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserInput)
