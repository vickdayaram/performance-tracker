import React, { Component } from 'react';
import WatchList from '../components/WatchList'
import UserInput from '../components/UserInput'


class DashboardContainer extends Component {
  render() {
    return (
      <div>
        < UserInput />
        < WatchList />
      </div>
    );
  }
}

export default DashboardContainer;
