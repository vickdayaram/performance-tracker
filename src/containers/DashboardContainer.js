import React, { Component } from 'react';
import WatchListContainer from './WatchListContainer'
import UserInput from '../components/UserInput'


class DashboardContainer extends Component {

  render() {
    return (
      <div>
        < UserInput />
        < br/>
        < br/>
        < WatchListContainer />
      </div>
    );
  }
}

export default DashboardContainer;
