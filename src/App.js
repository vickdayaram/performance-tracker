import React, { Component } from 'react';
import ChartContainer from './containers/ChartContainer'
import DashboardContainer from './containers/DashboardContainer'
import Nav from './components/Nav'
import { Grid, Header, Segment } from 'semantic-ui-react'
import HighCharts from './components/HighCharts'

class App extends Component {

  render() {
    return (
      <div>
        < Nav />
        <div className="mainBody">
        <Header as="h1" attached="top" inverted={true} textAlign="center">
          Perfomance Tracker
        </Header>
        < Segment attached>
        <Grid>
          <Grid.Row>
            <Grid.Column width={6}>
              < DashboardContainer />
            </Grid.Column>
            <Grid.Column width={10}>
              < ChartContainer />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </Segment>
        </div>
      </div>
    );
  }
}

export default App;
