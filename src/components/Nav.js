import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

class Nav extends Component {

  render() {
    return (
      <Segment inverted>
        <Menu inverted secondary>
          <Menu.Item name='Performance Tracker' />
        </Menu>
      </Segment>
    )
  }
}

export default Nav
