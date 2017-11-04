import React, { Component } from 'react'
import { Segment, Menu, Message } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import UserInput from './UserInput'
import { resetMessages } from '../actions'
import _ from 'lodash'

class MainHeader extends Component {

  renderDeleteMessage = () => {
    setTimeout(this.props.resetMessages, 2000)
    return (
      <Message color='red'> {this.props.messages.symbol} deleted from WatchList </Message>
    )
  }

  renderAddMessage = () => {
    setTimeout(this.props.resetMessages, 2000)
      return (
        <Message color='green'> {this.props.messages.symbol} added to WatchList </Message>
      )
  }

  render() {
    return (
      <Menu>
        <Menu.Item>
          < UserInput />
        </Menu.Item>
        <Menu.Item>
          {this.props.messages.showDelete ? this.renderDeleteMessage() : null }
          {this.props.messages.showAdd ? this.renderAddMessage() : null }
        </Menu.Item>
        <Menu.Item position='right'>
          <h1> Performance Tracker </h1>
        </Menu.Item>
      </Menu>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({resetMessages: resetMessages},
                               dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(MainHeader)
